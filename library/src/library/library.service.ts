import { Injectable } from '@nestjs/common';
import {PrismaClient , Prisma } from '@prisma/client';


@Injectable()
export class LibraryService {

async addBooks(data){
	const prisma = new PrismaClient();
  try{

	console.log(prisma.books);

        return await prisma.books.create({data});
  }

  catch(err){ 
  return err.message
 }

 finally{
         prisma.$disconnect()
 }

}



async showAllBooks(){

	const prisma= new PrismaClient();
	try{
		const allBooks = await prisma.books.findMany()
		return allBooks
	}
	catch(err){
		return err.message
	}
	finally{
		prisma.$disconnect()
	}
}

async updateBooks(data){
	const prisma= new PrismaClient();
      try{
	      const details=data.userId;
	      const update = await prisma.books.update({
		      where: { },
		      data: { },
	      })
	      return update
      }
      catch(err){
	      return err.message
      }
      finally{
	      prisma.$disconnect()
      }

}


async deleteBooks(data){
      const prisma= new PrismaClient();
      try{
	  const del=data.bookId;    
          await prisma.books.delete({
		  where: { bookId:del},
	  })
      }
      catch(err){
            return err.message
      }
      finally{
             prisma.$disconnect()
      }
      
      }

 async issueBooks(data){
             const prisma = new PrismaClient();
    try{
            console.log(data);
        await prisma.issue.create({data})
    }
 
    catch(err){
    return err.message
   }
 
    finally{  prisma.$disconnect()
             }
  }
 

 async returnBooks(data){
               const prisma = new PrismaClient();
     try{
              console.log(data);
          await prisma.return.create({data})
      }
 
      catch(err){
     return err.message
     }
 
      finally{  prisma.$disconnect()
               }
    }
 


}



