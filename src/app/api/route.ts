import { NextResponse, type NextRequest } from "next/server";

import { products } from "./data";

export const GET = async (request: NextRequest) => {
  return NextResponse.json(
    {
      products
    },
    {
      status: 200,
    }
  );
};

// export async function POST(request: NextRequest){
//   const req = await request.json()
//   products.push(req)
//   return NextResponse.json({
//     products,
//     status:201
//   })
// }

export const POST = async (request: NextRequest) => {
  const req = await request.json()
  const weight = parseFloat(req.weight)
  const height = parseFloat(req.height)
  const bmi = (weight / (height ** 2)).toFixed(2)

  return NextResponse.json({
    weight: weight,
    height: height,
    bmi: bmi
  })
}