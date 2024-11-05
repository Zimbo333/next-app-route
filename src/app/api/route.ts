import { NextResponse, type NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  return NextResponse.json(
    {
      message: "Hello World"
    },
    {
      status: 200,
    }
  );
};

export const POST = async (request: NextRequest) => {
  const req = await request.json()
  const weight = parseFloat(req.weight)
  const height = parseFloat(req.height)
  const bmi = (weight / (height ** 2)).toFixed(2)
  
  console.log(weight)
  console.log(height)
  console.log(bmi)
  return NextResponse.json({
    body: {
      weight:weight,
      height:height,
      bmi:bmi
    }
  })
}