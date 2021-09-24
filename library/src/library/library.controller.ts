import { Controller,Post,Put,Delete,Get,Body } from '@nestjs/common';
import { LibraryService } from './library.service';

@Controller('library')


export class LibraryController {

constructor (private lib:LibraryService){}


@Post('add_books')
add(@Body() data){
console.log(data);
return this.lib.addBooks(data);
}

@Get('show_all_books')
search(){
return this.lib.showAllBooks();
}

@Put('updateBooks')
update(@Body() data){
return this.lib.updateBooks(data);
}

@Delete('deleteBooks')
delete(@Body() data){
return this.lib.deleteBooks(data);
}

@Post('issueBooks')
issue(@Body() data){
return this.lib.issueBooks(data);
}

@Post('returnBooks')
return(@Body() data){
return this.lib.returnBooks(data);
}






}
