/*
AdriController
Name: Jeffrey Smith
Date: 04-11-2019

Description: this is a child program designed to kill the parent process, 
    adribot so that the garbage can be cleaned and adribot can be updated, then 
    relaunch adribot.

*/

#include <iostream> //needed for io functionality
#include <fstream> //needed for file streams
#include <cstdlib> //needed for system calls


#include <thread> //needed for sleep fuctionality
#include <chrono> //needed for sleep fuctionality

void start_File_Writer(const char** filename,  std::fstream * ofile){

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
}

void adribot_worker(std::fstream * ofile){
    int location = (*ofile).cur;
    while(true){
        std::cout << location << " " << (*ofile).eofbit << std::endl;
        std::this_thread::sleep_for (std::chrono::seconds(1));
    }
}
int main(){
//int main(int argc, char** argv){
    using namespace std::chrono_literals;
    std::cout << "Hello waiter\n" << std::flush;
    auto start = std::chrono::high_resolution_clock::now();
    std::this_thread::sleep_for(2s);
    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double, std::milli> elapsed = end-start;
    std::cout << "Waited " << elapsed.count() << " ms\n";
    
    
    
    /*std::fstream * ofile = new std::fstream; // creates a new filestream and pointer to it
    char const * Filename = "adricontroller.txt"; //log file name
    start_File_Writer(&Filename, ofile);//start file writer
    //std::cout << std::endl << "FUCK" << std::endl;
    system("node src/");
    adribot_worker(ofile);
    return 0;*/
}