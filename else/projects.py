# ================ word replacement project


# def replace_world():

#     str = "Hi guys, i am tomi, and hi hi hi"
#     world_to_replace = input("Enter the world to replace: ")
#     world_replacement = input("Enter the word replacement: ")
#     print(str.replace(world_to_replace, world_replacement))

# replace_world()    


# ==================================================================
# 1.solution======
# from PyDictionary import PyDictionary

# dictionary = PyDictionary()

# word = input("Enter your word: ")
# print(dictionary.meaning(word))

# 2.solution


# from PyDictionary import PyDictionary

# dictionary = PyDictionary()


# while True:
#     word = input("Enter your word: ")
#     if word == "":
#         break
#     print(dictionary.meaning(word))

# 3.solution

# from PyDictionary import PyDictionary

# dictionary = PyDictionary("eyes", "indentation", "head")


# print(dictionary.getMeanings())

# =====================================
# print(5/7)

# red_bucket = "Kevin"
# red_bucket = 10
# print(red_bucket)

# ================


# red_bucket = "Kevin"
# del red_bucket # var. red_bucket is deleted
# print(type(red_bucket))

# =====================

# red_bucket = input("What do you want to put in the bucket? ")
# print(red_bucket)

# =====================

# Thomas_Age = 10
# Age_at_Kindergarten = 5

# if Thomas_Age < Age_at_Kindergarten:
#     print("Thimas should be in pre-school")
# elif Thomas_Age == Age_at_Kindergarten:
#     print("Enjoy kindergarten")    
# else:
#     print("Thomas sholud be in kindergarten or another class")    


# ===========================

# def print_kevin():
#     text = "Kevin Stratvert has a great chanel"
#     print(text)
#     print(text)
#     print(text)

# print_kevin()    


# ==========================
# def school_age_calculator(age,name):
#     if age < 5:
#        print("Enjoy the tim!", name, "is only", age)
#     elif age == 5:
#        print("Enjoy kindergarten,", name)
#     else:
#        print("They grow so fast")

# school_age_calculator(5,"Thomas")    

# =================
# def add_ten_to_age(age):
#     new_age = age + 10
#     return new_age

# How_Old_Will_I_Be = add_ten_to_age(3)
# print(How_Old_Will_I_Be)     

# ============

# while     

# x=0
# while (x<5):
#     print(x)
#     x=x+1
    # ======================
# for
# for x in range(5,10):
#         print(x)    

# ==================================

# days=["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon1"]

# for d in days:
#     if(d=="Thu"):break
#     print(d) 

#     # //

from email.message import EmailMessage
from app2 import password
import ssl
import smtplib

email_sender = 'codewithtomi.com'
email_pasword = password

email_receiver = '' 

subject = "Dont forget to subscribe"
body = """"
When you watch a video, please hit subscribe
"""

em = EmailMessage()
em['From'] = email_sender
em['To'] = email_receiver
em['subject'] = subject
em.set_content(body)

context = ssl.create_default_context()

with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
    smtp.login(email_sender, email_pasword)
    smtp.sendmail(email_sender, email_receiver, em.as_string())


