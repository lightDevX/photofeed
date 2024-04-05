import { getPhotoById } from "@/lib/photoData";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {

    const photoId = params?.id;
    const data = getPhotoById(photoId);

    return NextResponse.json(data);
}