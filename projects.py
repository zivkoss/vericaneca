# ================ word replacement project


# def replace_world():

#     str = "Hi guys, i am tomi, and hi hi hi"
#     world_to_replace = input("Enter the world to replace: ")
#     world_replacement = input("Enter the word replacement: ")
#     print(str.replace(world_to_replace, world_replacement))

# replace_world()    


# ==================================================================

from PyDictionary import PyDictionary

dictionary = PyDictionary()

word = input("Enter your word: ")
print(dictionary.meaning(word))
