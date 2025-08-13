import { NextRequest, NextResponse } from "next/server";
import type { Product } from "@/types/product";

//동적라우팅으로 들어오는 params의 데이터 타입
// interface ParamsProp {
//     params : {id : string}
// }

// CRUD를 구현할 JSON 파일 접근을 위해 필요한 모듈 추가
import path from "path";
import { promises as fs } from "fs";

// CRUD를 구현할 JSON 파일의 경로 만들기
const dataPath = path.join(process.cwd(), 'src/app/data/product.json');


// 'src/app/data/product.json' 불러오기
async function getProducts() : Promise<Product[]> {
    const jsonData = await fs.readFile(dataPath, 'utf-8');
    return JSON.parse(jsonData);
}


// 저장함수
async function saveProduct(products: Product[]) {
     // json 파일에 쓰기
    await fs.writeFile(dataPath, JSON.stringify(products, null, 2))
}

// 데이터 조회
export async function GET(request : NextRequest, {params} : {params : Promise<{id : string}>} ) {
    try {

        const {id} = await params;
        // 불러온 파일을 JSON 파싱을 통해 Product 배열로 만들기
        const products : Product[] = await getProducts();
        const product = products.find(item => item.id === id);

        
        
        // 상품이 없는 경우
        if (!product) {
            return NextResponse.json({message:"상품이 존재하지 않습니다."}, {status : 404});
        }
        
        // 터미널 콘솔 출력
        // console.log(products);
        return NextResponse.json(product);
    } catch(error) {
        console.error("파일 불러오기 오류:", error)
        return NextResponse.json({message : "시스템 오류"}, {status : 500})
    };
}

// 데이터 조회
export async function PUT(request : NextRequest, {params} : {params : Promise<{id : string}>} ) {
    try {
        const products : Product[] = await getProducts();
        const {id} = await params;

        // 수정할 ID의 인덱스 값을 찾기
        const Idx = products.findIndex(item => item.id === id);

        // 상품이 없는 경우
        if (Idx == -1) {
            return NextResponse.json({message:"수정할 상품이 존재하지 않습니다."}, {status : 404});
        }

        //수정할 자료
        const updateProduct = await request.json();

        //전체 자료에 해당자료 수정 자료
        products[Idx] = {id : id, ...updateProduct};

        // 전체 자료 저장
        await saveProduct(products);
        return NextResponse.json(products[Idx]);

    } catch(error) {
        console.error("파일 불러오기 오류:", error)
        return NextResponse.json({message : "시스템 오류"}, {status : 500})
    };
}

// 데이터 조회
export async function PATCH(request : NextRequest, {params} : {params : Promise<{id : string}>} ) {
    try {
        const products : Product[] = await getProducts();
        const {id} = await params;

        // 수정할 ID의 인덱스 값을 찾기
        const Idx = products.findIndex(item => item.id === id);

        // 상품이 없는 경우
        if (Idx == -1) {
            return NextResponse.json({message:"수정할 상품이 존재하지 않습니다."}, {status : 404});
        }

        //요청된 값을 가지고 나머지는 선택적으로 만들기
        const partialData : Partial<Product> = await request.json();

        //전체 자료에 해당자료 수정 자료
        products[Idx] = {...products[Idx],...partialData};

        // 전체 자료 저장
        await saveProduct(products);
        return NextResponse.json(products[Idx]);

    } catch(error) {
        console.error("파일 불러오기 오류:", error)
        return NextResponse.json({message : "시스템 오류"}, {status : 500})
    };
}

// 데이터 조회
export async function DELETE(request : NextRequest, {params} : {params : Promise<{id : string}>} ) {
    try {
        const products : Product[] = await getProducts();
        const {id} = await params;

        // 기존 데이터에서 해당하는 ID만 제외
        const updateProduct : Product[] = products.filter(item => item.id !== id);

        // 상품이 없는 경우
        if (products.length == updateProduct.length) {
            return NextResponse.json({message:"수정할 상품이 존재하지 않습니다."}, {status : 404});
        }

        // 전체 자료 저장
        await saveProduct(updateProduct);
        return NextResponse.json({message : `정상적으로 삭제:[${id}]`}, {status : 200})

    } catch(error) {
        console.error("파일 불러오기 오류:", error)
        return NextResponse.json({message : "시스템 오류"}, {status : 500})
    };
}