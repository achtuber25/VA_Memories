import os


# Function to rename multiple files
def main():
    i = 0
    path = "D:\\BGMI\\VA_Memories\\src\\videos\\"
    for filename in os.listdir(path):
        print(filename)
        my_dest = "vA" + str(i) + ".mp4"
        my_source = path + filename
        my_dest = path + my_dest
    # rename() function will
    # rename all the files
        os.rename(my_source, my_dest)
        i += 1


# Driver Code
if __name__ == '__main__':
    # Calling main() function
    main()
