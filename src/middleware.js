import { NextResponse } from "next/server";

export function middleware(request){
const user = "user"

    if(!user){
        return NextResponse.redirect(
            new URL("/Login" , request.url)
        )
    }
    return NextResponse.next()
}

export const config ={
    matcher:["/","/Home","/Cart"]
}