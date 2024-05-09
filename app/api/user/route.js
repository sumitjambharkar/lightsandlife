import { getTokenData } from "@/app/helpers/getTokenData";
import connectDatabase from "@/app/libs/database";
import User from "@/app/model/User";
import {NextResponse,NextRequest} from "next/server";

connectDatabase();

export const dynamic = 'force-dynamic';
export async function GET (req) {
    
    try {
       const userId = await getTokenData(req);
       const user = await User.findById({_id:userId}).select("-password");
       return NextResponse.json({message:"User Found",data:user})
    } catch (error) {
        return NextResponse.json({error:error.message})
    }
}
