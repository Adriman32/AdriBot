/*
AdriController
Name: Jeffrey Smith
Date: 04-11-2019

Description: this is a child program designed to kill the parent process, 
    adribot so that the garbage can be cleaned and adribot can be updated, then 
    relaunch adribot.

*/

//#include <iostream> //needed for io functionality
//#include <fstream> //needed for file streams
#include <cstdlib> //needed for system calls


//#include <Windows.h>

/*void start_File_Writer(const char** filename,  std::fstream * ofile){

    (*ofile).open(*filename, std::ios::in | std::ios::out | std::ios::binary);//open the argument file if it exists
	
    if ((*ofile).fail()){ //if the file does not exist, this will create a new file
        std::cout << std::endl << "Couldn't find file " <<  *filename << std::endl;
		(*ofile).open(*filename, std::fstream::out);//create a file from the argument 
        (*ofile).eof(); //may need to remove later if EOF creates issues
		(*ofile).close();//close the fstream because only needed to create the file
		(*ofile).open(*filename, std::ios::in | std::ios::out | std::ios::binary); //redo opening the file now that it exists
        std::cout << " created new file " << std::endl;
        //create the root directory in the new file system
	}
    //char const * output = "fuck"; //debug code as a char*, this is can later be a log file, like date and time of restart
    //(*ofile).write((char*)output, sizeof(output)); //write the debug code to file
    (*ofile).close();
}*/

void adribot_worker(){
    while(true){ //infinite loop the adribot worker
        system("node src/"); //run adribot till a /ab reboot
        //Sleep(1000);
        system("git pull");
        
        //Sleep(1000);
        
    }
}
int main(int argc, char** argv){
    //std::fstream * ofile = new std::fstream; // creates a new filestream and pointer to it
    //char const * Filename = "adricontroller.txt"; //log file name
    //start_File_Writer(&Filename, ofile);//start file writer
    adribot_worker();
    return 0;
}
