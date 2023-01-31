import os
import glob,os



# Function to rename multiple files
def main():
    i = 0
    path = "D:\\BGMI\\VA_Memories\\src\\videos\\"
    lst_files = glob.glob(path+"*.mp4")
    lst_files.sort(key=os.path.getmtime)
    print(lst_files)
    for filename in lst_files:
        filename = filename.split("\\")[-1]
        print(filename)
        my_dest = "vA" + str(i) + ".mp4"
        my_source = path + filename
        my_dest = path + my_dest
        os.rename(my_source, my_dest)
        i += 1


# Driver Code
if __name__ == '__main__':
    main()
