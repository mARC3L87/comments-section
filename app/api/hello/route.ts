import { NextResponse } from 'next/server';
import { db } from '../../../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

export async function GET(request: Request) {
  const fetchData = await getDocs(collection(db, 'comments'));
  const res = fetchData.docs.map((doc) => doc.data());
  console.log(res[0].createdAt);
  return NextResponse.json(res);
}
