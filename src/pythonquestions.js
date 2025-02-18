export const pythonQuestions = [
    {
      topic: "Python Basics",
      questions: [
        {
          id: 1,
          question: "What is Python primarily classified as?",
          options: [
            "High-level programming language",
            "Assembly language",
            "Machine language",
            "Low-level programming language"
          ],
          answer: "High-level programming language",
          explanation: "Python is a high-level programming language that emphasizes code readability with its notable use of significant whitespace."
        },
        {
          id: 2,
          question: "Who created Python?",
          options: [
            "Guido van Rossum",
            "James Gosling",
            "Dennis Ritchie",
            "Bjarne Stroustrup"
          ],
          answer: "Guido van Rossum",
          explanation: "Python was created by Guido van Rossum and was first released in 1991."
        },
        {
          id: 3,
          question: "What is the latest stable version of Python?",
          options: [
            "Python 3.8",
            "Python 3.9",
            "Python 3.10",
            "Python 3.11"
          ],
          answer: "Python 3.11",
          explanation: "Python 3.11 was released in 2022, bringing performance improvements and new features."
        },
        {
          id: 4,
          question: "What is Python primarily used for?",
          options: [
            "Web development",
            "Data science",
            "Automation",
            "All of the above"
          ],
          answer: "All of the above",
          explanation: "Python is widely used in web development, data science, automation, machine learning, and more."
        },
        {
          id: 5,
          question: "Which of the following is a valid Python comment?",
          options: [
            "// This is a comment",
            "/* This is a comment */",
            "# This is a comment",
            "<-- This is a comment -->"
          ],
          answer: "# This is a comment",
          explanation: "In Python, comments start with a hash symbol (#)."
        },
        {
          id: 6,
          question: "What will the following code output?\n\n```python\nprint(2 + 3 * 4)\n```",
          options: [
            "14",
            "20",
            "24",
            "Error"
          ],
          answer: "14",
          explanation: "According to the order of operations, multiplication is performed before addition."
        },
        {
          id: 7,
          question: "Which of the following data types is immutable?",
          options: [
            "List",
            "Dictionary",
            "Tuple",
            "Set"
          ],
          answer: "Tuple",
          explanation: "Tuples are immutable, meaning their values cannot be changed after they are created."
        },
        {
          id: 8,
          question: "Which of the following is used to exit a Python program?",
          options: [
            "exit()",
            "quit()",
            "sys.exit()",
            "All of the above"
          ],
          answer: "All of the above",
          explanation: "Python provides multiple ways to exit the program: exit(), quit(), or sys.exit()."
        },
        {
          id: 9,
          question: "What will the following code print?\n\n```python\nx = 5\ny = 2\nprint(x ** y)\n```",
          options: [
            "25",
            "7",
            "10",
            "32"
          ],
          answer: "25",
          explanation: "The '**' operator is used for exponentiation in Python, so 5 raised to the power of 2 equals 25."
        },
        {
          id: 10,
          question: "What is the main advantage of Python's syntax?",
          options: [
            "It is complex and requires more lines of code",
            "It is concise and easy to understand",
            "It does not require indentation",
            "It is difficult to learn"
          ],
          answer: "It is concise and easy to understand",
          explanation: "Python's syntax emphasizes readability and allows developers to write clean and concise code."
        },
        {
          id: 11,
          question: "What will the following code output?\n\n```python\nfor i in range(1, 5):\n    print(i)\n```",
          options: [
            "1 2 3 4",
            "1 2 3",
            "0 1 2 3",
            "Error"
          ],
          answer: "1 2 3 4",
          explanation: "The range function generates numbers from 1 to 4."
        },
        {
          id: 12,
          question: "What is the purpose of the `pass` statement in Python?",
          options: [
            "To skip an iteration in a loop",
            "To define a function",
            "To create a placeholder for future code",
            "To terminate the program"
          ],
          answer: "To create a placeholder for future code",
          explanation: "The `pass` statement is a placeholder that does nothing, often used to define empty functions or loops."
        },
        {
          id: 13,
          question: "What is the use of the `input()` function in Python?",
          options: [
            "To accept user input",
            "To print data to the console",
            "To exit the program",
            "To create a variable"
          ],
          answer: "To accept user input",
          explanation: "`input()` is used to take input from the user in Python."
        },
        {
          id: 14,
          question: "Which of the following will return the length of a list in Python?",
          options: [
            "len()",
            "count()",
            "length()",
            "size()"
          ],
          answer: "len()",
          explanation: "The `len()` function returns the number of items in a list, string, or other collection in Python."
        },
        {
          id: 15,
          question: "What does `//` do in Python?",
          options: [
            "Modulus",
            "Exponentiation",
            "Integer division",
            "String concatenation"
          ],
          answer: "Integer division",
          explanation: "`//` is used for integer division in Python, where the result is the quotient without the remainder."
        },
        {
          id: 16,
          question: "What will the following code output?\n\n```python\nx = 'Python'\nprint(x[1])\n```",
          options: [
            "P",
            "y",
            "t",
            "Error"
          ],
          answer: "y",
          explanation: "In Python, string indices start at 0, so x[1] will return the second character, 'y'."
        },
        {
          id: 17,
          question: "Which of the following is not a Python data type?",
          options: [
            "Integer",
            "Boolean",
            "Float",
            "Character"
          ],
          answer: "Character",
          explanation: "Python does not have a `Character` data type; it uses strings for characters."
        },
        {
          id: 18,
          question: "How do you check the type of a variable in Python?",
          options: [
            "type(variable)",
            "variable.type()",
            "check(variable)",
            "isinstance(variable)"
          ],
          answer: "type(variable)",
          explanation: "The `type()` function is used to check the data type of a variable in Python."
        },
        {
          id: 19,
          question: "What does the `__init__()` method do in Python?",
          options: [
            "Defines a class",
            "Initializes object attributes",
            "Creates an object",
            "Prints data to the console"
          ],
          answer: "Initializes object attributes",
          explanation: "`__init__()` is a special method used to initialize object attributes when a class is instantiated."
        },
        {
          id: 20,
          question: "What does the `del` statement do in Python?",
          options: [
            "Deletes an object",
            "Deletes a variable",
            "Deletes a file",
            "All of the above"
          ],
          answer: "All of the above",
          explanation: "The `del` statement is used to delete an object, variable, or item in a collection."
        }
      ]
    },
    {
      topic: "Data Types",
      questions: [
        {
          id: 21,
          question: "Which of the following is an immutable data type in Python?",
          options: ["List", "Dictionary", "Tuple", "Set"],
          answer: "Tuple",
          explanation: "Tuples are immutable sequences in Python, meaning their contents cannot be changed after creation."
        },
        {
          id: 22,
          question: "Which of the following is a mutable data type in Python?",
          options: ["String", "List", "Tuple", "Integer"],
          answer: "List",
          explanation: "Lists are mutable in Python, meaning their contents can be changed after creation."
        },
        {
          id: 23,
          question: "What is the output of `len('hello')` in Python?",
          options: ["4", "5", "6", "Error"],
          answer: "5",
          explanation: "The `len()` function returns the length of a string, and 'hello' has 5 characters."
        },
        {
          id: 24,
          question: "Which data type would you use to store a collection of unique elements in Python?",
          options: ["List", "Dictionary", "Tuple", "Set"],
          answer: "Set",
          explanation: "A `set` is a data type in Python that stores unique elements, without any duplicates."
        },
        {
          id: 25,
          question: "Which of these methods can be used to add an element to a set?",
          options: ["add()", "append()", "insert()", "push()"],
          answer: "add()",
          explanation: "The `add()` method is used to add an element to a set in Python."
        },
        {
          id: 26,
          question: "Which of these data types is used for key-value pairs in Python?",
          options: ["List", "Tuple", "Dictionary", "Set"],
          answer: "Dictionary",
          explanation: "A `dictionary` is a collection of key-value pairs in Python."
        },
        {
          id: 27,
          question: "Which of the following is the correct way to create an empty dictionary in Python?",
          options: [
            "{}",
            "[]",
            "set()",
            "dict()"
          ],
          answer: "{}",
          explanation: "{} is used to create an empty dictionary in Python."
        },
        {
          id: 28,
          question: "What is the type of `None` in Python?",
          options: ["int", "float", "NoneType", "object"],
          answer: "NoneType",
          explanation: "`None` is a special constant in Python that has the type `NoneType`."
        },
        {
          id: 29,
          question: "What will the following code print?\n\n```python\nx = 10\ny = 3.14\nprint(type(x), type(y))\n```",
          options: [
            "int float",
            "float int",
            "int int",
            "float float"
          ],
          answer: "int float",
          explanation: "`type()` is used to return the data type of the variables. x is an integer, and y is a float."
        },
        {
          id: 30,
          question: "What is the result of `2 + 3.0` in Python?",
          options: [
            "5.0",
            "5",
            "Error",
            "None"
          ],
          answer: "5.0",
          explanation: "In Python, adding an integer to a float results in a float (the result is 5.0)."
        },
        {
          id: 31,
          question: "Which of the following is used to concatenate two lists in Python?",
          options: [
            "+",
            "-",
            "append()",
            "extend()"
          ],
          answer: "+",
          explanation: "The `+` operator is used to concatenate two lists in Python."
        },
        {
          id: 32,
          question: "What is the output of `x = [1, 2, 3]\nprint(x * 2)`?",
          options: [
            "[1, 2, 3, 1, 2, 3]",
            "[2, 4, 6]",
            "[1, 2, 3, 4, 5, 6]",
            "Error"
          ],
          answer: "[1, 2, 3, 1, 2, 3]",
          explanation: "The `*` operator repeats the list a given number of times (in this case, 2)."
        },
        {
          id: 33,
          question: "How do you convert a string to an integer in Python?",
          options: [
            "int()",
            "str()",
            "float()",
            "convert()"
          ],
          answer: "int()",
          explanation: "The `int()` function is used to convert a string into an integer."
        },
        {
          id: 34,
          question: "Which of the following is used to remove the last element of a list in Python?",
          options: [
            "pop()",
            "remove()",
            "delete()",
            "discard()"
          ],
          answer: "pop()",
          explanation: "The `pop()` method removes and returns the last element of a list."
        },
        {
          id: 35,
          question: "Which of the following is an unordered collection in Python?",
          options: [
            "List",
            "Tuple",
            "Set",
            "Dictionary"
          ],
          answer: "Set",
          explanation: "Sets are unordered collections in Python, meaning the order of elements is not guaranteed."
        },
        {
          id: 36,
          question: "Which function returns a view object in Python?",
          options: [
            "keys()",
            "values()",
            "items()",
            "All of the above"
          ],
          answer: "All of the above",
          explanation: "The `keys()`, `values()`, and `items()` methods return view objects of a dictionary's keys, values, and items respectively."
        },
        {
          id: 37,
          question: "What will the following code output?\n\n```python\nx = {1, 2, 3, 4}\ny = {3, 4, 5, 6}\nprint(x & y)\n```",
          options: [
            "{3, 4}",
            "{1, 2, 3, 4}",
            "{5, 6}",
            "{}"
          ],
          answer: "{3, 4}",
          explanation: "`&` is used for intersection in Python sets. The intersection of `{1, 2, 3, 4}` and `{3, 4, 5, 6}` is `{3, 4}`."
        },
        {
          id: 38,
          question: "How do you check if a key exists in a dictionary?",
          options: [
            "key()",
            "exists()",
            "in",
            "has_key()"
          ],
          answer: "in",
          explanation: "The `in` operator is used to check if a key exists in a dictionary."
        },
        {
          id: 39,
          question: "What will the following code output?\n\n```python\nx = [1, 2, 3]\ny = [4, 5, 6]\nprint(x + y)\n```",
          options: [
            "[1, 2, 3, 4, 5, 6]",
            "[1, 2, 3][4, 5, 6]",
            "[4, 5, 6, 1, 2, 3]",
            "Error"
          ],
          answer: "[1, 2, 3, 4, 5, 6]",
          explanation: "`+` operator is used to concatenate two lists."
        }
      ]
    },
    {
      topic: "String Handling",
      questions: [
        {
          id: 40,
          question: "What does the `strip()` method do in Python?",
          options: [
            "Removes leading and trailing whitespace",
            "Converts string to lowercase",
            "Concatenates two strings",
            "Splits a string into a list"
          ],
          answer: "Removes leading and trailing whitespace",
          explanation: "The `strip()` method removes leading and trailing whitespaces from a string."
        },
        {
          id: 41,
          question: "How do you access the first character of a string in Python?",
          options: [
            "string[0]",
            "string[1]",
            "string[-1]",
            "string[0:]"
          ],
          answer: "string[0]",
          explanation: "In Python, string indices start at 0, so `string[0]` accesses the first character."
        },
        {
          id: 42,
          question: "What does the `lower()` method do in Python?",
          options: [
            "Converts the string to uppercase",
            "Converts the string to lowercase",
            "Returns the length of the string",
            "Converts the string to title case"
          ],
          answer: "Converts the string to lowercase",
          explanation: "`lower()` returns a copy of the string with all characters converted to lowercase."
        },
        {
          id: 43,
          question: "Which method is used to replace a substring in a string?",
          options: [
            "replace()",
            "change()",
            "update()",
            "alter()"
          ],
          answer: "replace()",
          explanation: "`replace()` is used to replace a specified substring with another substring."
        },
        {
          id: 44,
          question: "What will the following code output?\n\n```python\nx = 'Python'\nprint(x[1:4])\n```",
          options: [
            "yth",
            "y",
            "Pyth",
            "Error"
          ],
          answer: "yth",
          explanation: "The slice `x[1:4]` returns the substring from index 1 up to but not including index 4."
        },
        {
          id: 45,
          question: "What does the `split()` method do in Python?",
          options: [
            "Splits a string into a list based on a delimiter",
            "Joins two strings together",
            "Converts a string to a number",
            "Removes whitespace from a string"
          ],
          answer: "Splits a string into a list based on a delimiter",
          explanation: "`split()` breaks a string into a list at the specified delimiter."
        },
        {
          id: 46,
          question: "Which method is used to check if a string starts with a specific substring?",
          options: [
            "startwith()",
            "beginswith()",
            "startswith()",
            "first()"
          ],
          answer: "startswith()",
          explanation: "`startswith()` checks if a string starts with a specific substring."
        },
        {
          id: 47,
          question: "What will the following code output?\n\n```python\nx = 'Python'\nprint(x[-1])\n```",
          options: [
            "P",
            "n",
            "Error",
            "o"
          ],
          answer: "n",
          explanation: "The index `-1` accesses the last character of the string."
        },
        {
          id: 48,
          question: "Which method would you use to check if a string contains only numbers?",
          options: [
            "isdigit()",
            "isnumeric()",
            "isalpha()",
            "checkdigit()"
          ],
          answer: "isdigit()",
          explanation: "`isdigit()` checks if all characters in a string are digits."
        },
        {
          id: 49,
          question: "What does the `join()` method do in Python?",
          options: [
            "Joins two lists together",
            "Joins characters of a string into a list",
            "Joins a sequence of strings into one string",
            "Joins the strings and adds whitespace"
          ],
          answer: "Joins a sequence of strings into one string",
          explanation: "`join()` concatenates a list of strings into a single string."
        },
        {
          id: 50,
          question: "How do you format strings in Python?",
          options: [
            "format()",
            "f-string",
            "both format() and f-string",
            "None of the above"
          ],
          answer: "both format() and f-string",
          explanation: "Python supports both `format()` method and f-strings (formatted string literals) for string formatting."
        }
      ]
    },
    {
        topic: "Control Structures",
        questions: [
          {
            id: 51,
            question: "What does the `if` statement do in Python?",
            options: [
              "Evaluates a condition and executes a block of code if the condition is true",
              "Loops through a block of code",
              "Defines a function",
              "Handles errors"
            ],
            answer: "Evaluates a condition and executes a block of code if the condition is true",
            explanation: "The `if` statement is used to evaluate a condition and execute a block of code only if the condition evaluates to True."
          },
          {
            id: 52,
            question: "What is the correct syntax for the `else` statement in Python?",
            options: [
              "else: statement",
              "else statement",
              "else: [statement]",
              "if else statement"
            ],
            answer: "else: statement",
            explanation: "The `else` statement must follow an `if` statement and can contain one or more statements to execute when the `if` condition is False."
          },
          {
            id: 53,
            question: "What is the difference between `if` and `elif` in Python?",
            options: [
              "There is no difference",
              "`elif` is used to specify an additional condition if the previous `if` condition is false",
              "`if` is for boolean values only",
              "`elif` is used for exception handling"
            ],
            answer: "`elif` is used to specify an additional condition if the previous `if` condition is false",
            explanation: "`elif` is used when we need to check multiple conditions, allowing more than one branch of execution."
          },
          {
            id: 54,
            question: "How do you check multiple conditions in Python?",
            options: [
              "if condition1 and condition2",
              "if condition1 or condition2",
              "Both of the above",
              "None of the above"
            ],
            answer: "Both of the above",
            explanation: "Python allows you to combine multiple conditions using `and` or `or` to form compound conditions."
          },
          {
            id: 55,
            question: "Which statement is used to exit a loop in Python?",
            options: [
              "exit",
              "stop",
              "break",
              "continue"
            ],
            answer: "break",
            explanation: "`break` is used to exit the loop immediately."
          }
        ]
      },
      {
        topic: "Functions",
        questions: [
          {
            id: 56,
            question: "How do you define a function in Python?",
            options: [
              "def function_name():",
              "function function_name():",
              "function_name() = {}",
              "define function_name()"
            ],
            answer: "def function_name():",
            explanation: "In Python, functions are defined using the `def` keyword."
          },
          {
            id: 57,
            question: "What is the purpose of `return` in a Python function?",
            options: [
              "To stop the function's execution",
              "To return the output to the caller",
              "To define a function's parameters",
              "To define the function name"
            ],
            answer: "To return the output to the caller",
            explanation: "The `return` statement sends the result of a function back to the caller."
          },
          {
            id: 58,
            question: "How do you pass arguments to a function in Python?",
            options: [
              "By defining them inside parentheses",
              "By using square brackets",
              "By assigning them to variables",
              "By using `input()` inside the function"
            ],
            answer: "By defining them inside parentheses",
            explanation: "Arguments are passed inside parentheses when the function is defined and can be accessed within the function."
          },
          {
            id: 59,
            question: "What is a lambda function in Python?",
            options: [
              "A function with no return value",
              "A function defined with the `lambda` keyword, usually for short tasks",
              "A function that runs in the background",
              "A function that can only be called once"
            ],
            answer: "A function defined with the `lambda` keyword, usually for short tasks",
            explanation: "A lambda function is a small anonymous function that can have any number of input arguments but only one expression."
          },
          {
            id: 60,
            question: "Which of the following is true about Python functions?",
            options: [
              "Python functions must always return a value",
              "Python functions can have default values for parameters",
              "Python functions cannot take variable-length arguments",
              "Python functions are not reusable"
            ],
            answer: "Python functions can have default values for parameters",
            explanation: "In Python, parameters in functions can have default values that are used if the caller does not provide them."
          }
        ]
      },
      {
        topic: "Object-Oriented Programming (OOP)",
        questions: [
          {
            id: 61,
            question: "What is a class in Python?",
            options: [
              "A function that returns a value",
              "A blueprint for creating objects",
              "A collection of data in a list",
              "A type of function"
            ],
            answer: "A blueprint for creating objects",
            explanation: "A class is a blueprint or template for creating objects. It defines a set of attributes and methods that the objects will have."
          },
          {
            id: 62,
            question: "What does the `self` keyword refer to in Python?",
            options: [
              "The name of the class",
              "The method name",
              "The current instance of the class",
              "The class's parent"
            ],
            answer: "The current instance of the class",
            explanation: "`self` refers to the instance of the object that is calling the method. It allows the method to access the object's attributes and methods."
          },
          {
            id: 63,
            question: "Which of the following is the correct syntax for creating an object of a class in Python?",
            options: [
              "class_name()",
              "object = class_name",
              "object = new class_name()",
              "class_name.object()"
            ],
            answer: "object = class_name()",
            explanation: "An object is created by calling the class with parentheses."
          },
          {
            id: 64,
            question: "What is inheritance in Python?",
            options: [
              "A function that creates objects",
              "A mechanism where a new class derives attributes and methods from an existing class",
              "A function to clone objects",
              "None of the above"
            ],
            answer: "A mechanism where a new class derives attributes and methods from an existing class",
            explanation: "Inheritance allows one class to inherit the attributes and methods of another class."
          },
          {
            id: 65,
            question: "What is encapsulation in Python?",
            options: [
              "Hiding the details of the class implementation",
              "Grouping related classes together",
              "A mechanism for creating new objects",
              "The ability to change the class"
            ],
            answer: "Hiding the details of the class implementation",
            explanation: "Encapsulation involves bundling the data (attributes) and methods that operate on the data into a single unit, and restricting access to some of the object's components."
          }
        ]
      },
      {
        topic: "Modules and Libraries",
        questions: [
          {
            id: 66,
            question: "What is a module in Python?",
            options: [
              "A large program",
              "A function within a script",
              "A file containing Python code",
              "A type of error"
            ],
            answer: "A file containing Python code",
            explanation: "A module is a Python file containing definitions and statements. It can include functions, classes, and variables."
          },
          {
            id: 67,
            question: "How do you import a module in Python?",
            options: [
              "import module_name",
              "include module_name",
              "import module_name.py",
              "use module_name"
            ],
            answer: "import module_name",
            explanation: "You can import a module using the `import` statement followed by the module's name."
          },
          {
            id: 68,
            question: "What does the `math.sqrt()` function do in Python?",
            options: [
              "Returns the square root of a number",
              "Returns the square of a number",
              "Calculates the factorial of a number",
              "Rounds the number to the nearest integer"
            ],
            answer: "Returns the square root of a number",
            explanation: "The `sqrt()` function from the `math` module returns the square root of the given number."
          },
          {
            id: 69,
            question: "Which Python library is commonly used for data analysis?",
            options: [
              "NumPy",
              "Pandas",
              "TensorFlow",
              "Matplotlib"
            ],
            answer: "Pandas",
            explanation: "Pandas is a powerful library used for data manipulation and analysis."
          },
          {
            id: 70,
            question: "What is the purpose of the `os` module in Python?",
            options: [
              "For mathematical operations",
              "For working with file and directory paths",
              "For working with strings",
              "For error handling"
            ],
            answer: "For working with file and directory paths",
            explanation: "The `os` module provides functions for interacting with the operating system, such as working with files and directories."
          }
        ]
      },
      {
        topic: "Error Handling",
        questions: [
          {
            id: 71,
            question: "What does the `try` block do in Python?",
            options: [
              "It defines an error handling block",
              "It defines code that may raise an error",
              "It is used to start a loop",
              "It starts a function definition"
            ],
            answer: "It defines code that may raise an error",
            explanation: "The `try` block is used to test a block of code for errors during execution."
          },
          {
            id: 72,
            question: "What is the purpose of the `except` block in Python?",
            options: [
              "To handle exceptions (errors) raised in the `try` block",
              "To create new variables",
              "To print output to the screen",
              "To define functions"
            ],
            answer: "To handle exceptions (errors) raised in the `try` block",
            explanation: "`except` catches and handles exceptions or errors that occur in the `try` block."
          },
          {
            id: 73,
            question: "Which keyword is used to define custom exceptions in Python?",
            options: [
              "raise",
              "error",
              "exception",
              "throw"
            ],
            answer: "raise",
            explanation: "The `raise` keyword is used to raise custom exceptions in Python."
          },
          {
            id: 74,
            question: "What does the `finally` block do in Python?",
            options: [
              "It defines a block of code that will always execute, regardless of exceptions",
              "It handles all exceptions",
              "It defines a function",
              "It exits a loop"
            ],
            answer: "It defines a block of code that will always execute, regardless of exceptions",
            explanation: "The `finally` block always runs after the `try` and `except` blocks, regardless of whether an exception was raised or not."
          },
          {
            id: 75,
            question: "Which of the following is a built-in exception in Python?",
            options: [
              "ZeroDivisionError",
              "FileNotFoundError",
              "IndexError",
              "All of the above"
            ],
            answer: "All of the above",
            explanation: "Python has several built-in exceptions, including `ZeroDivisionError`, `FileNotFoundError`, and `IndexError`."
          }
        ]
      },
      {
        topic: "File Handling",
        questions: [
          {
            id: 76,
            question: "Which mode is used to open a file for reading in Python?",
            options: [
              "'w'",
              "'r'",
              "'a'",
              "'wb'"
            ],
            answer: "'r'",
            explanation: "'r' is the mode used to open a file for reading."
          },
          {
            id: 77,
            question: "What does the `open()` function return in Python?",
            options: [
              "A file object",
              "A list",
              "A string",
              "An integer"
            ],
            answer: "A file object",
            explanation: "The `open()` function returns a file object that allows for reading or writing to the file."
          },
          {
            id: 78,
            question: "Which function is used to write data to a file in Python?",
            options: [
              "write()",
              "writeline()",
              "insert()",
              "add()"
            ],
            answer: "write()",
            explanation: "The `write()` function is used to write a string to a file."
          },
          {
            id: 79,
            question: "How do you read the entire content of a file in Python?",
            options: [
              "file.read()",
              "file.readlines()",
              "file.readline()",
              "file.readall()"
            ],
            answer: "file.read()",
            explanation: "The `read()` function reads the entire content of the file."
          },
          {
            id: 80,
            question: "What does the `with` statement do when working with files?",
            options: [
              "Closes the file automatically after reading or writing",
              "Writes the file data automatically",
              "Opens the file automatically",
              "None of the above"
            ],
            answer: "Closes the file automatically after reading or writing",
            explanation: "The `with` statement ensures that the file is automatically closed after its block of code has been executed."
          }
        ]
      },
      {
        topic: "Algorithms",
        questions: [
          {
            id: 81,
            question: "What is the time complexity of accessing an element in a list by index in Python?",
            options: [
              "O(1)",
              "O(n)",
              "O(n^2)",
              "O(log n)"
            ],
            answer: "O(1)",
            explanation: "Accessing an element by index in a list is an O(1) operation, as it directly accesses the element."
          },
          {
            id: 82,
            question: "What is the time complexity of searching for an element in a list (unsorted) in Python?",
            options: [
              "O(1)",
              "O(n)",
              "O(n^2)",
              "O(log n)"
            ],
            answer: "O(n)",
            explanation: "Searching for an element in an unsorted list requires checking each element, which results in O(n) time complexity."
          },
          {
            id: 83,
            question: "What is the purpose of a binary search algorithm?",
            options: [
              "To search for an element in an unsorted list",
              "To find the middle element in a sorted list",
              "To search for an element in a sorted list",
              "To sort a list"
            ],
            answer: "To search for an element in a sorted list",
            explanation: "Binary search is an efficient algorithm used to search for an element in a sorted list by repeatedly dividing the search interval in half."
          },
          {
            id: 84,
            question: "Which sorting algorithm is the most efficient in Python for large datasets?",
            options: [
              "Bubble Sort",
              "Quick Sort",
              "Selection Sort",
              "Merge Sort"
            ],
            answer: "Quick Sort",
            explanation: "Quick Sort is considered one of the most efficient sorting algorithms for large datasets."
          },
          {
            id: 85,
            question: "What is the time complexity of a merge sort algorithm?",
            options: [
              "O(n)",
              "O(n log n)",
              "O(log n)",
              "O(n^2)"
            ],
            answer: "O(n log n)",
            explanation: "Merge sort has a time complexity of O(n log n), making it efficient for large datasets."
          }
        ]
      },
      {
        topic: "Advanced Topics",
        questions: [
          {
            id: 86,
            question: "What is the purpose of decorators in Python?",
            options: [
              "To modify the behavior of a function or method",
              "To handle errors",
              "To define classes",
              "To import modules"
            ],
            answer: "To modify the behavior of a function or method",
            explanation: "Decorators are used to modify or extend the behavior of functions or methods without changing their source code."
          },
          {
            id: 87,
            question: "What is a generator in Python?",
            options: [
              "A function that returns a sequence of values one at a time",
              "A method to handle errors",
              "A way to create a new class",
              "A list of items"
            ],
            answer: "A function that returns a sequence of values one at a time",
            explanation: "A generator is a function that returns an iterator, which can be used to produce a sequence of values lazily (on demand)."
          },
          {
            id: 88,
            question: "What is the purpose of `__init__` method in a class?",
            options: [
              "To initialize the object when the class is instantiated",
              "To define the class attributes",
              "To initialize the class itself",
              "To destroy the object when no longer in use"
            ],
            answer: "To initialize the object when the class is instantiated",
            explanation: "`__init__` is the constructor method in Python, which is called when a new object of the class is created."
          },
          {
            id: 89,
            question: "What does `yield` do in a generator?",
            options: [
              "Pauses the function and returns the value to the caller",
              "Ends the function",
              "Loops through a sequence",
              "None of the above"
            ],
            answer: "Pauses the function and returns the value to the caller",
            explanation: "`yield` is used in generators to pause the function's execution and return a value to the caller, resuming from where it left off when called again."
          },
          {
            id: 90,
            question: "What is the purpose of the `@staticmethod` decorator in Python?",
            options: [
              "It defines a method that doesn't require an instance of the class",
              "It defines a method that is static across all instances",
              "It modifies the behavior of the class",
              "It is used to initialize the class"
            ],
            answer: "It defines a method that doesn't require an instance of the class",
            explanation: "`@staticmethod` is used to define a method that doesn't require access to the instance (`self`) or class (`cls`)."
          }
        ]
      },
      {
        topic: "Modules and Libraries",
        questions: [
          {
            id: 91,
            question: "Which of the following is the correct way to import a module in Python?",
            options: [
              "import module_name",
              "import module_name()",
              "import 'module_name'",
              "include module_name"
            ],
            answer: "import module_name",
            explanation: "The correct way to import a module is by using the 'import' keyword followed by the module name."
          },
          {
            id: 92,
            question: "What is the purpose of the `math` module in Python?",
            options: [
              "To perform mathematical operations like trigonometric functions, logarithms, and constants",
              "To handle file operations",
              "To manipulate strings",
              "To create and manage databases"
            ],
            answer: "To perform mathematical operations like trigonometric functions, logarithms, and constants",
            explanation: "The `math` module provides mathematical functions and constants like `sin()`, `cos()`, `log()`, `pi`, etc."
          },
          {
            id: 93,
            question: "Which Python library is used for data manipulation and analysis?",
            options: [
              "Pandas",
              "Matplotlib",
              "NumPy",
              "Requests"
            ],
            answer: "Pandas",
            explanation: "The Pandas library is used for data manipulation and analysis, providing data structures like DataFrame."
          },
          {
            id: 94,
            question: "Which of the following libraries is used for plotting and visualization in Python?",
            options: [
              "Matplotlib",
              "Pandas",
              "SciPy",
              "NumPy"
            ],
            answer: "Matplotlib",
            explanation: "Matplotlib is used for creating static, animated, and interactive visualizations in Python."
          },
          {
            id: 95,
            question: "How can you install a Python library from the Python Package Index (PyPI)?",
            options: [
              "pip install library_name",
              "install library_name",
              "python install library_name",
              "pypi install library_name"
            ],
            answer: "pip install library_name",
            explanation: "You can use `pip install library_name` to install libraries from the Python Package Index (PyPI)."
          }
        ]
      },
      {
        topic: "Object-Oriented Programming (OOP)",
        questions: [
          {
            id: 96,
            question: "What does OOP stand for in Python?",
            options: [
              "Object-Oriented Programming",
              "Object Oriented Procedure",
              "Object Oriented Protocol",
              "Object Oriented Process"
            ],
            answer: "Object-Oriented Programming",
            explanation: "OOP stands for Object-Oriented Programming, a programming paradigm based on the concept of objects."
          },
          {
            id: 97,
            question: "Which keyword is used to define a class in Python?",
            options: [
              "class",
              "def",
              "object",
              "module"
            ],
            answer: "class",
            explanation: "The `class` keyword is used to define a class in Python."
          },
          {
            id: 98,
            question: "What is the purpose of the `self` keyword in Python?",
            options: [
              "It refers to the current object instance",
              "It is used to define a method",
              "It refers to a global object",
              "It is used to access static methods"
            ],
            answer: "It refers to the current object instance",
            explanation: "`self` is used in instance methods to refer to the current instance of the class."
          },
          {
            id: 99,
            question: "What is inheritance in Python?",
            options: [
              "When a class is derived from another class to inherit its attributes and methods",
              "When a class defines a new function",
              "When a method is overridden in a class",
              "When a class is assigned a new object"
            ],
            answer: "When a class is derived from another class to inherit its attributes and methods",
            explanation: "Inheritance allows a class to inherit methods and attributes from another class, facilitating code reuse."
          },
          {
            id: 100,
            question: "What is method overriding in Python?",
            options: [
              "When a child class provides its own implementation of a method defined in the parent class",
              "When a class defines a method with the same name as a variable",
              "When a method is hidden from the class",
              "When a class changes the method's signature"
            ],
            answer: "When a child class provides its own implementation of a method defined in the parent class",
            explanation: "Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its parent class."
          }
        ]
      },
      {
        topic: "Regular Expressions (RegEx)",
        questions: [
          {
            id: 101,
            question: "What does the `re.match()` function do in Python?",
            options: [
              "It checks if a pattern matches the beginning of a string",
              "It checks if a pattern matches the entire string",
              "It splits the string based on a pattern",
              "It replaces the pattern in the string"
            ],
            answer: "It checks if a pattern matches the beginning of a string",
            explanation: "The `re.match()` function checks for a match only at the start of a string."
          },
          {
            id: 102,
            question: "What does the `.` (dot) character represent in regular expressions?",
            options: [
              "Any single character",
              "End of a line",
              "Start of a string",
              "Whitespace"
            ],
            answer: "Any single character",
            explanation: "In regular expressions, the `.` character matches any single character except a newline."
          },
          {
            id: 103,
            question: "How do you find all occurrences of a pattern in a string in Python?",
            options: [
              "re.findall()",
              "re.match()",
              "re.search()",
              "re.replace()"
            ],
            answer: "re.findall()",
            explanation: "The `re.findall()` function returns all non-overlapping matches of a pattern in a string."
          },
          {
            id: 104,
            question: "Which function in the `re` module is used to search for a pattern in a string?",
            options: [
              "re.search()",
              "re.match()",
              "re.findall()",
              "re.split()"
            ],
            answer: "re.search()",
            explanation: "The `re.search()` function searches the string for a match to the pattern."
          },
          {
            id: 105,
            question: "How do you replace a pattern with another string in Python?",
            options: [
              "re.sub()",
              "re.replace()",
              "re.modify()",
              "re.change()"
            ],
            answer: "re.sub()",
            explanation: "The `re.sub()` function is used to replace occurrences of a pattern with a specified string."
          }
        ]
      },
      {
        topic: "Networking and APIs",
        questions: [
          {
            id: 106,
            question: "Which module is used to work with HTTP requests in Python?",
            options: [
              "requests",
              "http",
              "urllib",
              "socket"
            ],
            answer: "requests",
            explanation: "The `requests` module is used for making HTTP requests, handling responses, and interacting with APIs."
          },
          {
            id: 107,
            question: "Which method is used to send a GET request in the `requests` module?",
            options: [
              "requests.get()",
              "requests.send()",
              "requests.request()",
              "requests.post()"
            ],
            answer: "requests.get()",
            explanation: "The `requests.get()` method is used to send a GET request to a specified URL."
          },
          {
            id: 108,
            question: "What is an API in Python?",
            options: [
              "A set of rules that allows software applications to communicate with each other",
              "A library used for graphical user interface development",
              "A tool for mathematical calculations",
              "A way to handle system commands"
            ],
            answer: "A set of rules that allows software applications to communicate with each other",
            explanation: "API stands for Application Programming Interface, and it defines a set of functions for interacting with a software application."
          },
          {
            id: 109,
            question: "How can you parse JSON data in Python?",
            options: [
              "Using the `json` module",
              "Using the `requests` module",
              "Using the `urllib` module",
              "Using the `csv` module"
            ],
            answer: "Using the `json` module",
            explanation: "The `json` module is used to parse JSON data into Python objects (and vice versa)."
          },
          {
            id: 110,
            question: "Which method is used to send data in a POST request using the `requests` module?",
            options: [
              "requests.post()",
              "requests.send()",
              "requests.put()",
              "requests.get()"
            ],
            answer: "requests.post()",
            explanation: "The `requests.post()` method is used to send data to a server via a POST request."
          }
        ]
      },
      {
        topic: "Date and Time",
        questions: [
          {
            id: 111,
            question: "Which module in Python is used to work with dates and times?",
            options: [
              "datetime",
              "time",
              "calendar",
              "date"
            ],
            answer: "datetime",
            explanation: "The `datetime` module is used to work with dates and times in Python."
          },
          {
            id: 112,
            question: "What does the `datetime.now()` function return?",
            options: [
              "Current date and time",
              "Current date only",
              "Current time only",
              "Current year"
            ],
            answer: "Current date and time",
            explanation: "`datetime.now()` returns the current local date and time."
          },
          {
            id: 113,
            question: "How do you format a `datetime` object into a string?",
            options: [
              "Using the `strftime()` method",
              "Using the `format()` method",
              "Using the `str()` method",
              "Using the `to_string()` method"
            ],
            answer: "Using the `strftime()` method",
            explanation: "The `strftime()` method is used to convert a `datetime` object into a string with a specific format."
          },
          {
            id: 114,
            question: "Which of the following functions can be used to convert a string into a `datetime` object?",
            options: [
              "datetime.strptime()",
              "datetime.format()",
              "datetime.convert()",
              "datetime.parse()"
            ],
            answer: "datetime.strptime()",
            explanation: "`datetime.strptime()` is used to parse a string into a `datetime` object based on a given format."
          },
          {
            id: 115,
            question: "How do you add days to a `datetime` object in Python?",
            options: [
              "Use the `timedelta()` method",
              "Use the `add()` method",
              "Use the `increment()` method",
              "Use the `plus()` method"
            ],
            answer: "Use the `timedelta()` method",
            explanation: "The `timedelta()` method allows you to add or subtract time (days, hours, etc.) from a `datetime` object."
          }
        ]
      },
      {
        topic: "Testing and Debugging",
        questions: [
          {
            id: 116,
            question: "What is the purpose of unit testing in Python?",
            options: [
              "To test individual units or components of a program",
              "To check the system's performance",
              "To test the GUI of the application",
              "To check for syntax errors in the code"
            ],
            answer: "To test individual units or components of a program",
            explanation: "Unit testing ensures that each part of a program functions correctly independently before integration."
          },
          {
            id: 117,
            question: "Which Python module is commonly used for unit testing?",
            options: [
              "unittest",
              "testing",
              "pytest",
              "debugger"
            ],
            answer: "unittest",
            explanation: "The `unittest` module provides a framework for writing and running tests in Python."
          },
          {
            id: 118,
            question: "What is the purpose of the `assert` statement in Python?",
            options: [
              "To raise an exception if a condition is false",
              "To print a variable",
              "To start a new test case",
              "To debug the code"
            ],
            answer: "To raise an exception if a condition is false",
            explanation: "The `assert` statement is used for debugging purposes, ensuring that conditions are met, and raising exceptions if they aren't."
          },
          {
            id: 119,
            question: "Which method is used to find the first occurrence of a substring in Python?",
            options: [
              "find()",
              "index()",
              "search()",
              "contains()"
            ],
            answer: "find()",
            explanation: "The `find()` method returns the index of the first occurrence of a substring in a string, or -1 if the substring is not found."
          },
          {
            id: 120,
            question: "Which of the following is used to handle exceptions in Python?",
            options: [
              "try-except block",
              "try-catch block",
              "if-else block",
              "assert block"
            ],
            answer: "try-except block",
            explanation: "Python uses the `try-except` block to handle exceptions, allowing for graceful error management."
          }
        ]
      },
      {
        topic: "Comprehensions",
        questions: [
          {
            id: 121,
            question: "What is list comprehension in Python?",
            options: [
              "A concise way to create lists using a single line of code",
              "A method for sorting lists",
              "A method for removing duplicate elements from a list",
              "A way to convert lists into tuples"
            ],
            answer: "A concise way to create lists using a single line of code",
            explanation: "List comprehension provides a concise way to create lists by applying an expression to each element in an iterable."
          },
          {
            id: 122,
            question: "Which of the following is a correct example of list comprehension?",
            options: [
              "[x**2 for x in range(5)]",
              "list(x**2 for x in range(5))",
              "x**2 for x in range(5)",
              "[x^2 in range(5)]"
            ],
            answer: "[x**2 for x in range(5)]",
            explanation: "The correct syntax for list comprehension involves using a for loop and applying an expression to each element."
          },
          {
            id: 123,
            question: "Which of the following is the correct syntax for dictionary comprehension in Python?",
            options: [
              "{key: value for key, value in iterable}",
              "dict(key, value for key, value in iterable)",
              "dict(key: value for key, value in iterable)",
              "{key, value for key, value in iterable}"
            ],
            answer: "{key: value for key, value in iterable}",
            explanation: "Dictionary comprehension in Python is similar to list comprehension but creates dictionaries using key-value pairs."
          },
          {
            id: 124,
            question: "What is the output of the following code? `[x for x in range(3) if x % 2 == 0]`",
            options: [
              "[0, 2]",
              "[1, 3]",
              "[1, 2]",
              "[2, 4]"
            ],
            answer: "[0, 2]",
            explanation: "The list comprehension filters for even numbers from 0 to 2, resulting in the list `[0, 2]`."
          },
          {
            id: 125,
            question: "What is set comprehension in Python?",
            options: [
              "A concise way to create sets using a single line of code",
              "A way to convert lists into sets",
              "A way to remove duplicate values from sets",
              "A method for sorting sets"
            ],
            answer: "A concise way to create sets using a single line of code",
            explanation: "Set comprehension allows for the creation of sets in a concise manner, similar to list comprehension but using curly braces."
          }
        ]
      },
      {
        topic: "Advanced Python Concepts",
        questions: [
          {
            id: 126,
            question: "What is the purpose of the `__init__` method in Python?",
            options: [
              "It initializes the instance of a class",
              "It sets default values for variables",
              "It runs when the class is imported",
              "It overrides the class name"
            ],
            answer: "It initializes the instance of a class",
            explanation: "`__init__` is the constructor method in Python and is automatically called when a new instance of the class is created."
          },
          {
            id: 127,
            question: "What is the difference between `@staticmethod` and `@classmethod` in Python?",
            options: [
              "A static method does not take a reference to the class or instance, while a class method takes the class as the first argument",
              "Static methods can only be used with class instances",
              "Class methods take an instance as their first argument",
              "Static methods can be called only from an instance"
            ],
            answer: "A static method does not take a reference to the class or instance, while a class method takes the class as the first argument",
            explanation: "The `@staticmethod` decorator defines methods that do not operate on class or instance variables, while `@classmethod` takes the class itself as the first parameter (`cls`)."
          },
          {
            id: 128,
            question: "What is the purpose of `__del__` in Python?",
            options: [
              "It defines the destructor of a class",
              "It initializes a class instance",
              "It defines a class method",
              "It handles the destruction of variables"
            ],
            answer: "It defines the destructor of a class",
            explanation: "`__del__` is the destructor method and is called when an object is destroyed, allowing for cleanup before the object is removed from memory."
          },
          {
            id: 129,
            question: "Which Python keyword is used to define an abstract class?",
            options: [
              "ABC",
              "abstract",
              "abstractmethod",
              "class"
            ],
            answer: "ABC",
            explanation: "In Python, the `ABC` (Abstract Base Class) module is used to define abstract classes."
          },
          {
            id: 130,
            question: "What does the `yield` keyword do in Python?",
            options: [
              "It returns a value from a function and saves its state",
              "It defines a function",
              "It creates a new variable",
              "It is used to iterate through a list"
            ],
            answer: "It returns a value from a function and saves its state",
            explanation: "`yield` is used in Python to produce a generator, returning a value while keeping the function's state intact for subsequent calls."
          }
        ]
      },
      {
        topic: "Lists, Sets, Tuples, Dictionaries",
        questions: [
          {
            id: 131,
            question: "What is the output of the following code? `list(map(lambda x: x**2, [1, 2, 3]))`",
            options: [
              "[1, 4, 9]",
              "[1, 2, 3]",
              "[2, 4, 6]",
              "[1, 3, 5]"
            ],
            answer: "[1, 4, 9]",
            explanation: "The `map()` function applies the `lambda` function to each element of the list. The `lambda x: x**2` squares each element, resulting in `[1, 4, 9]`."
          },
          {
            id: 132,
            question: "Which of the following is a method to remove all elements from a Python list?",
            options: [
              "clear()",
              "delete()",
              "remove_all()",
              "pop()"
            ],
            answer: "clear()",
            explanation: "The `clear()` method is used to remove all elements from a list, leaving it empty."
          },
          {
            id: 133,
            question: "Which of the following will remove a random element from a set in Python?",
            options: [
              "pop()",
              "remove()",
              "discard()",
              "clear()"
            ],
            answer: "pop()",
            explanation: "The `pop()` method removes and returns a random element from a set."
          },
          {
            id: 134,
            question: "What is the result of calling `set([1, 2, 2, 3])`?",
            options: [
              "{1, 2, 3}",
              "[1, 2, 2, 3]",
              "[1, 3]",
              "{1, 2, 2}"
            ],
            answer: "{1, 2, 3}",
            explanation: "A set automatically removes duplicates, so the resulting set is `{1, 2, 3}`."
          },
          {
            id: 135,
            question: "Which of the following is the correct way to access the last element of a tuple `t = (1, 2, 3)`?",
            options: [
              "t[-1]",
              "t[0]",
              "t[3]",
              "t[len(t)]"
            ],
            answer: "t[-1]",
            explanation: "In Python, you can use negative indexing to access elements from the end of the sequence. `t[-1]` returns the last element."
          },
          {
            id: 136,
            question: "What does the `in` operator do in Python for a dictionary?",
            options: [
              "Checks if the key exists in the dictionary",
              "Checks if the value exists in the dictionary",
              "Checks if the dictionary is empty",
              "Checks if a key-value pair exists"
            ],
            answer: "Checks if the key exists in the dictionary",
            explanation: "The `in` operator checks if a specified key is present in the dictionary, returning `True` or `False`."
          },
          {
            id: 137,
            question: "What is the output of `len({'a': 1, 'b': 2})`?",
            options: [
              "2",
              "3",
              "1",
              "4"
            ],
            answer: "2",
            explanation: "The `len()` function returns the number of key-value pairs in the dictionary. Here, it returns `2`."
          },
          {
            id: 138,
            question: "How can you add an element to a tuple?",
            options: [
              "Tuples are immutable, so you cannot add elements",
              "Using the `append()` method",
              "Using the `insert()` method",
              "By concatenating tuples"
            ],
            answer: "Tuples are immutable, so you cannot add elements",
            explanation: "Tuples are immutable in Python. To add an element, you would have to create a new tuple."
          },
          {
            id: 139,
            question: "What is the output of the following code? `list({1, 2, 3})`",
            options: [
              "[1, 2, 3]",
              "{1, 2, 3}",
              "error",
              "[3, 2, 1]"
            ],
            answer: "[1, 2, 3]",
            explanation: "The `list()` constructor can be used to convert a set into a list, and the elements will be in an arbitrary order."
          },
          {
            id: 140,
            question: "Which of the following methods will not raise an error when applied to a dictionary in Python?",
            options: [
              "clear()",
              "popitem()",
              "pop()",
              "sort()"
            ],
            answer: "sort()",
            explanation: "The `sort()` method is not available for dictionaries in Python. `clear()`, `popitem()`, and `pop()` are valid dictionary methods."
          }
        ]
      },
      {
        topic: "String Slicing and Manipulation",
        questions: [
          {
            id: 141,
            question: "What is the output of `s = 'Python'; s[1:4]`?",
            options: [
              "yth",
              "Pyt",
              "tho",
              "Pyth"
            ],
            answer: "yth",
            explanation: "String slicing `s[1:4]` returns the characters starting from index `1` up to but not including index `4`, which gives 'yth'."
          },
          {
            id: 142,
            question: "What is the output of `s = 'Python'; s[::-1]`?",
            options: [
              "nohtyP",
              "Pthoyn",
              "Python",
              "Thonpy"
            ],
            answer: "nohtyP",
            explanation: "The `[::-1]` slice reverses the string, so the output is 'nohtyP'."
          },
          {
            id: 143,
            question: "What is the result of the operation `s = 'Python'; s[::2]`?",
            options: [
              "Pto",
              "Pyn",
              "Pht",
              "Py"
            ],
            answer: "Pto",
            explanation: "The slice `s[::2]` steps through the string with a step size of `2`, returning every second character: 'P', 't', 'o'."
          },
          {
            id: 144,
            question: "What is the output of `s = 'abcdef'; s[1:-1]`?",
            options: [
              "bcde",
              "bc",
              "abcdef",
              "cd"
            ],
            answer: "bcde",
            explanation: "The slice `s[1:-1]` returns the characters from index 1 to index -1 (not including the last element), giving 'bcde'."
          },
          {
            id: 145,
            question: "How can you check if a string `s` starts with the substring 'Py' in Python?",
            options: [
              "s.startswith('Py')",
              "s[:2] == 'Py'",
              "s[0:2] == 'Py'",
              "Both a and b"
            ],
            answer: "Both a and b",
            explanation: "Both `s.startswith('Py')` and `s[:2] == 'Py'` can be used to check if a string starts with 'Py'."
          },
          {
            id: 146,
            question: "What will the `split()` method return when applied to a string `s = 'a,b,c'`?",
            options: [
              "['a', 'b', 'c']",
              "['a,b,c']",
              "a,b,c",
              "['a', 'b', 'c', '']"
            ],
            answer: "['a', 'b', 'c']",
            explanation: "The `split()` method splits the string into a list of substrings based on the delimiter (comma in this case), so the result is `['a', 'b', 'c']`."
          },
          {
            id: 147,
            question: "What will be the output of `s = '   hello'; s.strip()`?",
            options: [
              "hello",
              "   hello",
              "hello   ",
              "error"
            ],
            answer: "hello",
            explanation: "The `strip()` method removes leading and trailing whitespace from the string, so the result will be 'hello'."
          },
          {
            id: 148,
            question: "Which of the following can be used to replace all occurrences of 'old' with 'new' in the string `s`?",
            options: [
              "s.replace('old', 'new')",
              "s.replace('new', 'old')",
              "s.substitute('old', 'new')",
              "s.update('old', 'new')"
            ],
            answer: "s.replace('old', 'new')",
            explanation: "The `replace()` method is used to replace all occurrences of a substring with another substring."
          },
          {
            id: 149,
            question: "What does the `join()` method do in Python?",
            options: [
              "Concatenates a sequence of strings into one string",
              "Splits a string into a list",
              "Reverses a string",
              "Adds a delimiter between string elements"
            ],
            answer: "Concatenates a sequence of strings into one string",
            explanation: "The `join()` method is used to join a sequence of strings into a single string with an optional separator."
          },
          {
            id: 150,
            question: "What is the result of `s = 'Hello'; s.upper()`?",
            options: [
              "HELLO",
              "hello",
              "Hello",
              "error"
            ],
            answer: "HELLO",
            explanation: "The `upper()` method converts all characters in the string to uppercase, so the result is 'HELLO'."
          }
        ]
      },
      {
        topic: "Lists, Sets, Tuples, Dictionaries",
        questions: [
          {
            id: 151,
            question: "What is the output of `a = [1, 2, 3]; b = [4, 5]; a + b`?",
            options: [
              "[1, 2, 3, 4, 5]",
              "[1, 2, 3, [4, 5]]",
              "[4, 5, 1, 2, 3]",
              "error"
            ],
            answer: "[1, 2, 3, 4, 5]",
            explanation: "The `+` operator concatenates two lists, producing a new list that contains all the elements from both lists."
          },
          {
            id: 152,
            question: "What will be the output of `x = {1, 2, 3}; x.add([4, 5])`?",
            options: [
              "error",
              "{1, 2, 3, [4, 5]}",
              "{[4, 5], 1, 2, 3}",
              "None"
            ],
            answer: "error",
            explanation: "The `add()` method in a set only accepts hashable types. Lists are mutable and unhashable, so this will raise a `TypeError`."
          },
          {
            id: 153,
            question: "What is the output of `x = {(1, 2), (3, 4), (5, 6)}; x.add([7, 8])`?",
            options: [
              "error",
              "{(1, 2), (3, 4), (5, 6), [7, 8]}",
              "{(1, 2), (3, 4), (5, 6)}",
              "{(1, 2), (3, 4), (5, 6), (7, 8)}"
            ],
            answer: "error",
            explanation: "Although tuples are immutable, they can still contain mutable types (like lists). Adding a list to a set is not allowed, so this raises a `TypeError`."
          },
          {
            id: 154,
            question: "What will be the result of `a = {1, 2, 3}; b = {2, 3, 4}; a & b`?",
            options: [
              "{1, 2, 3}",
              "{2, 3}",
              "{1, 4}",
              "{2, 3, 4}"
            ],
            answer: "{2, 3}",
            explanation: "The `&` operator performs the intersection of two sets, returning a set containing only the elements present in both sets."
          },
          {
            id: 155,
            question: "What is the result of `a = {1, 2, 3}; b = {3, 4, 5}; a ^ b`?",
            options: [
              "{1, 2, 3, 4, 5}",
              "{1, 2, 4, 5}",
              "{3}",
              "{1, 5, 4}"
            ],
            answer: "{1, 2, 4, 5}",
            explanation: "The `^` operator performs the symmetric difference between two sets, returning a set containing elements that are in either set, but not in both."
          },
          {
            id: 156,
            question: "Which method is used to return the maximum value from a dictionary in Python?",
            options: [
              "max()",
              "maxkey()",
              "maxvalue()",
              "dict.max()"
            ],
            answer: "max()",
            explanation: "The `max()` function can be used to return the maximum key, value, or item from a dictionary. For example, `max(dict, key=dict.get)` returns the key with the highest value."
          },
          {
            id: 157,
            question: "What is the output of `x = (1, 2, 3); x[1:2] = (4, 5)`?",
            options: [
              "error",
              "(4, 5)",
              "(1, 4, 5, 3)",
              "(1, 4, 5, 2, 3)"
            ],
            answer: "error",
            explanation: "Tuples are immutable in Python, so attempting to modify their content directly like this will raise a `TypeError`."
          },
          {
            id: 158,
            question: "What will be the output of `a = {'x': 1, 'y': 2, 'z': 3}; del a['y']`?",
            options: [
              "{'x': 1, 'z': 3}",
              "error",
              "{'x': 1, 'y': 2}",
              "{'y': 2, 'z': 3}"
            ],
            answer: "{'x': 1, 'z': 3}",
            explanation: "The `del` statement removes the specified key-value pair from the dictionary, so `a` will become `{'x': 1, 'z': 3}`."
          },
          {
            id: 159,
            question: "What will the following code output? `a = [(1, 2), (3, 4), (5, 6)]; a.sort()`",
            options: [
              "[(1, 2), (3, 4), (5, 6)]",
              "error",
              "[(5, 6), (3, 4), (1, 2)]",
              "[(1, 2), (5, 6), (3, 4)]"
            ],
            answer: "[(1, 2), (3, 4), (5, 6)]",
            explanation: "The `sort()` method sorts a list of tuples by the first element of each tuple by default. Since the first elements are 1, 3, and 5, the list will be sorted accordingly."
          },
          {
            id: 160,
            question: "What will be the output of `x = {'a': 10, 'b': 20}; x.update({'b': 30, 'c': 40})`?",
            options: [
              "{'a': 10, 'b': 30, 'c': 40}",
              "{'a': 10, 'b': 20, 'c': 40}",
              "{'a': 10, 'b': 30}",
              "{'a': 10, 'b': 20, 'c': 40}"
            ],
            answer: "{'a': 10, 'b': 30, 'c': 40}",
            explanation: "The `update()` method merges the dictionary passed as an argument into the original dictionary. If there are overlapping keys, the values are updated, so `b` is updated to `30`."
          }
        ]
      },
      {
        topic: "String Slicing and Manipulation",
        questions: [
          {
            id: 161,
            question: "What will be the output of `s = 'Python'; s[-3:]`?",
            options: [
              "hon",
              "tho",
              "Pyt",
              "Py"
            ],
            answer: "hon",
            explanation: "The slice `s[-3:]` starts from the third-to-last character and continues to the end, resulting in 'hon'."
          },
          {
            id: 162,
            question: "What is the result of `s = 'abcdef'; s[::3]`?",
            options: [
              "abc",
              "ad",
              "ae",
              "ace"
            ],
            answer: "ace",
            explanation: "The slice `s[::3]` steps through the string with a step size of 3, selecting 'a', 'c', and 'e'."
          },
          {
            id: 163,
            question: "What will `s = 'hello world'; s[::2][::-1]` output?",
            options: [
              "drw olleh",
              "dlrow olleh",
              "dlrow",
              "error"
            ],
            answer: "drw olleh",
            explanation: "First, `s[::2]` extracts every second character from the string, giving 'hlowrd'. Then, reversing this string with `[::-1]` results in 'drw olleh'."
          },
          {
            id: 164,
            question: "What does the `partition()` method do in Python?",
            options: [
              "Splits the string into two parts",
              "Splits the string at the first occurrence of a separator",
              "Splits the string into a list",
              "Splits the string into characters"
            ],
            answer: "Splits the string at the first occurrence of a separator",
            explanation: "The `partition()` method splits the string into a tuple of three parts: the substring before the separator, the separator itself, and the substring after it."
          },
          {
            id: 165,
            question: "What will the following code output? `s = '   hello   '; s.strip().replace('e', 'a')`",
            options: [
              "hallo",
              "hello",
              "hello   ",
              "   hello"
            ],
            answer: "hallo",
            explanation: "The `strip()` method removes leading and trailing whitespace, so 'hello'. Then, the `replace()` method replaces 'e' with 'a', giving 'hallo'."
          },
          {
            id: 166,
            question: "Which of the following methods will return `True` if a string contains only alphabetic characters?",
            options: [
              "isalpha()",
              "isalpha",
              "isalnum()",
              "isnumeric()"
            ],
            answer: "isalpha()",
            explanation: "The `isalpha()` method returns `True` if all characters in the string are alphabetic and the string is non-empty."
          },
          {
            id: 167,
            question: "What will the following code output? `s = 'Hello'; s[::-1][::2]`",
            options: [
              "olH",
              "oH",
              "Hello",
              "olleH"
            ],
            answer: "olH",
            explanation: "First, `s[::-1]` reverses the string 'Hello', resulting in 'olleH'. Then, `::2` takes every second character, yielding 'olH'."
          },
          {
            id: 168,
            question: "How can you reverse the words in a string `s = 'Hello World'`?",
            options: [
              "s.split()[::-1]",
              "s.split().reverse()",
              "s[::-1].split()",
              "error"
            ],
            answer: "s.split()[::-1]",
            explanation: "Splitting the string with `split()` and reversing the resulting list with `[::-1]` will reverse the words in the string."
          }
        ]
      },
      {
        topic: "Functions and Lambda Functions",
        questions: [
          {
            id: 169,
            question: "What will be the output of the following code? `def func(x, y=2): return x * y; print(func(5))`",
            options: [
              "5",
              "10",
              "None",
              "Error"
            ],
            answer: "10",
            explanation: "The function `func` multiplies `x` by `y`. Since `y` defaults to `2`, calling `func(5)` returns `5 * 2 = 10`."
          },
          {
            id: 170,
            question: "What does the following lambda function do? `f = lambda x, y: x ** y; print(f(2, 3))`",
            options: [
              "8",
              "5",
              "6",
              "error"
            ],
            answer: "8",
            explanation: "The lambda function calculates `x` raised to the power `y`. `f(2, 3)` returns `2 ** 3`, which is `8`."
          },
          {
            id: 171,
            question: "What is the output of `def wrapper(func): return lambda x: func(x) * 2; print(wrapper(lambda x: x + 3)(4))`?",
            options: [
              "8",
              "14",
              "11",
              "Error"
            ],
            answer: "14",
            explanation: "The `wrapper` function returns a lambda that doubles the result of calling the inner function. `lambda x: x + 3` returns 7 when `4` is passed, and then it is doubled to `14`."
          },
          {
            id: 172,
            question: "What will happen if we pass a keyword argument before a positional argument? Example: `def func(a, b): print(a, b); func(b=2, 1)`",
            options: [
              "The code will execute successfully",
              "SyntaxError: named argument follows positional argument",
              "None of the above",
              "Error in function definition"
            ],
            answer: "SyntaxError: named argument follows positional argument",
            explanation: "In Python, positional arguments must appear before keyword arguments. The order matters and will raise a `SyntaxError` if violated."
          },
          {
            id: 173,
            question: "What is the output of `def add(x, y): return x + y; def add(x, y=2): return x * y; print(add(3))`?",
            options: [
              "9",
              "6",
              "5",
              "Error"
            ],
            answer: "6",
            explanation: "The second definition of `add` overwrites the first one. The default value of `y=2` will be used in the second function, and `3 * 2 = 6` is returned."
          },
          {
            id: 174,
            question: "What will be the output of the following code? `def func(*args): return sum(args); print(func(1, 2, 3, 4))`",
            options: [
              "10",
              "15",
              "20",
              "Error"
            ],
            answer: "10",
            explanation: "The `*args` collects all positional arguments as a tuple, and `sum(args)` computes their sum, which is `1 + 2 + 3 + 4 = 10`."
          },
          {
            id: 175,
            question: "What will be the output of `lambda x, y=3: x ** y; print((lambda x, y=3: x ** y)(2))`?",
            options: [
              "6",
              "8",
              "9",
              "Error"
            ],
            answer: "8",
            explanation: "The lambda function computes `x` raised to the power of `y`. `lambda x, y=3: x ** y` gives `2 ** 3 = 8`."
          },
          {
            id: 176,
            question: "What does the following code print? `def foo(x, y=2, z=3): return x + y + z; print(foo(1, z=5))`",
            options: [
              "8",
              "9",
              "6",
              "Error"
            ],
            answer: "8",
            explanation: "The function `foo` uses default values for `y` and `z`. Since `z` is provided as `5`, the result is `1 + 2 + 5 = 8`."
          }
        ]
      },
    
      {
        topic: "File Handling and Operations",
        questions: [
          {
            id: 177,
            question: "What will the following code output? `f = open('test.txt', 'w'); f.write('Hello World'); f.close(); f = open('test.txt', 'r'); print(f.read())`",
            options: [
              "Hello World",
              "Error",
              "None",
              "test.txt"
            ],
            answer: "Hello World",
            explanation: "The file `test.txt` is opened in write mode and 'Hello World' is written to it. After closing and reopening it in read mode, the contents of the file are printed."
          },
          {
            id: 178,
            question: "What is the result of `f = open('test.txt', 'r'); f.readlines(); print(f.closed)`?",
            options: [
              "True",
              "False",
              "Error",
              "None"
            ],
            answer: "True",
            explanation: "The `readlines()` method reads the file and returns a list of lines, and `f.closed` checks if the file is closed. The file is closed after reading, so `True` will be printed."
          },
          {
            id: 179,
            question: "What is the correct way to create a file if it doesn't exist? `f = open('test.txt', 'x')`?",
            options: [
              "Yes, it will create a file",
              "No, it will raise an error if the file doesn't exist",
              "It will overwrite the existing file",
              "None of the above"
            ],
            answer: "Yes, it will create a file",
            explanation: "The 'x' mode is used to create a file. If the file already exists, it raises a `FileExistsError`."
          },
          {
            id: 180,
            question: "Which of the following is true when opening a file in append mode (`'a'`)?",
            options: [
              "The file is created if it doesn't exist",
              "The file content is overwritten if the file already exists",
              "The file content is truncated",
              "None of the above"
            ],
            answer: "The file is created if it doesn't exist",
            explanation: "In append mode, if the file doesn't exist, it is created. If it exists, new content is added at the end without modifying the existing content."
          },
          {
            id: 181,
            question: "What will be the output of `f = open('test.txt', 'r'); f.write('Python'); f.close()`?",
            options: [
              "Python",
              "Error",
              "None",
              "test.txt"
            ],
            answer: "Error",
            explanation: "In read mode (`'r'`), the file cannot be written to. This will raise an `io.UnsupportedOperation` error."
          },
          {
            id: 182,
            question: "What is the purpose of `pickle.dump()`?",
            options: [
              "Serialize an object to a file",
              "Deserialize a file into an object",
              "Close a file after writing",
              "Open a file"
            ],
            answer: "Serialize an object to a file",
            explanation: "The `pickle.dump()` method serializes a Python object and writes it to a file."
          },
          {
            id: 183,
            question: "Which method is used to open a file in binary read mode in Python?",
            options: [
              "'rb'",
              "'wb'",
              "'r'",
              "'br'"
            ],
            answer: "'rb'",
            explanation: "The `'rb'` mode is used to open a file for binary reading in Python."
          }
        ]
      },
    
      {
        topic: "Error Handling and Assertions",
        questions: [
          {
            id: 184,
            question: "What will be the output of the following code? `try: 1/0 except ZeroDivisionError: print('Error') finally: print('End')`",
            options: [
              "Error",
              "End",
              "Error End",
              "ZeroDivisionError"
            ],
            answer: "Error End",
            explanation: "The `ZeroDivisionError` is caught in the `except` block, printing 'Error', and the `finally` block is executed, printing 'End'."
          },
          {
            id: 185,
            question: "What will be the result of `assert 1 == 1`?",
            options: [
              "True",
              "False",
              "Error",
              "None"
            ],
            answer: "True",
            explanation: "The assertion `assert 1 == 1` will pass silently, as the condition is `True`."
          },
          {
            id: 186,
            question: "What will the following code do? `try: raise ValueError('Something went wrong') except ValueError as e: print(e)`",
            options: [
              "Prints 'Something went wrong'",
              "Raises an error",
              "Prints 'ValueError'",
              "None of the above"
            ],
            answer: "Prints 'Something went wrong'",
            explanation: "The `ValueError` is raised, and the message `'Something went wrong'` is printed by the `except` block."
          },
          {
            id: 187,
            question: "What happens if you do not handle exceptions in Python?",
            options: [
              "The program continues as normal",
              "The program crashes",
              "A default exception is printed",
              "None of the above"
            ],
            answer: "The program crashes",
            explanation: "If exceptions are not handled using `try` and `except`, the program will crash with the error message."
          },
          {
            id: 188,
            question: "What is the use of `assert` in Python?",
            options: [
              "To check a condition during runtime",
              "To handle exceptions",
              "To create custom exceptions",
              "None of the above"
            ],
            answer: "To check a condition during runtime",
            explanation: "`assert` is used to assert that a condition is `True`. If the condition is `False`, an `AssertionError` is raised."
          }
        ]
      },
      {
        topic: "String Slicing and Manipulation",
        questions: [
          {
            id: 189,
            question: "What will be the result of `s = 'Python'; print(s[1:4])`?",
            options: [
              "Pyt",
              "yth",
              "y",
              "Error"
            ],
            answer: "yth",
            explanation: "String slicing in Python works by including the start index but excluding the end index. Therefore, `s[1:4]` gives 'yth'."
          },
          {
            id: 190,
            question: "What is the output of the following code? `s = 'hello world'; print(s[::-1])`",
            options: [
              "dlrow olleh",
              "hello world",
              "error",
              "world hello"
            ],
            answer: "dlrow olleh",
            explanation: "The slice `[::-1]` reverses the string, resulting in 'dlrow olleh'."
          },
          {
            id: 191,
            question: "What will `s = 'Python'; print(s[::2])` print?",
            options: [
              "Pto",
              "Pty",
              "ytn",
              "Error"
            ],
            answer: "Pto",
            explanation: "The slice `s[::2]` means 'take every second element'. So it prints 'Pto'."
          },
          {
            id: 192,
            question: "How do you replace all occurrences of a substring in a string? Example: `s = 'hello world'; s.replace('world', 'Python')`?",
            options: [
              "'world' replaced with 'Python'",
              "'Python' replaced with 'hello'",
              "'hello world' replaced with 'Python Python'",
              "Error"
            ],
            answer: "'hello world' replaced with 'Python Python'",
            explanation: "The `replace` method replaces all occurrences of 'world' with 'Python'. The output is 'hello Python'."
          },
          {
            id: 193,
            question: "What will be the result of `s = 'abcdef'; print(s[1:-1])`?",
            options: [
              "bcde",
              "bc",
              "cdef",
              "Error"
            ],
            answer: "bcde",
            explanation: "The slice `s[1:-1]` starts from index 1 (second character) and excludes the last character, giving 'bcde'."
          },
          {
            id: 194,
            question: "What is the output of `s = 'Hello'; print(s.find('o'))`?",
            options: [
              "4",
              "5",
              "3",
              "-1"
            ],
            answer: "4",
            explanation: "The `find()` method returns the index of the first occurrence of the substring 'o', which is at index 4."
          },
          {
            id: 195,
            question: "What will `s = 'Hello'; print(s.startswith('He'))` output?",
            options: [
              "True",
              "False",
              "Error",
              "None"
            ],
            answer: "True",
            explanation: "The `startswith()` method checks if the string starts with the specified prefix ('He') and returns `True`."
          }
        ]
      },
    
      {
        topic: "Operators in Python",
        questions: [
          {
            id: 196,
            question: "What will be the output of `print(5 > 3 and 10 < 15)`?",
            options: [
              "True",
              "False",
              "None",
              "Error"
            ],
            answer: "True",
            explanation: "Both conditions are `True` ('5 > 3' and '10 < 15'), so the result of the `and` operator is `True`."
          },
          {
            id: 197,
            question: "What will be the output of `print(5 | 3)`?",
            options: [
              "7",
              "15",
              "5",
              "3"
            ],
            answer: "7",
            explanation: "The bitwise OR operator `|` compares the binary representations of `5` and `3`. The result of `5 | 3` is `7`."
          },
          {
            id: 198,
            question: "Which operator is used for identity comparison in Python?",
            options: [
              "==",
              "is",
              "is not",
              "None of the above"
            ],
            answer: "is",
            explanation: "The `is` operator is used for identity comparison in Python, checking if two variables point to the same object in memory."
          },
          {
            id: 199,
            question: "What will be the output of `print(5 << 1)`?",
            options: [
              "10",
              "2",
              "5",
              "Error"
            ],
            answer: "10",
            explanation: "The left shift operator `<<` shifts the bits of `5` one position to the left, which results in `10`."
          },
          {
            id: 200,
            question: "What is the result of `5 ** 2`?",
            options: [
              "25",
              "5",
              "2",
              "Error"
            ],
            answer: "25",
            explanation: "The `**` operator is used for exponentiation. `5 ** 2` means 5 raised to the power of 2, which equals 25."
          },
          {
            id: 201,
            question: "What is the result of `5 // 2`?",
            options: [
              "2.5",
              "2",
              "1",
              "None"
            ],
            answer: "2",
            explanation: "The floor division operator `//` returns the quotient without the remainder. `5 // 2` gives `2`."
          },
          {
            id: 202,
            question: "What will `print(3 == 3 == 3)` output?",
            options: [
              "True",
              "False",
              "None",
              "Error"
            ],
            answer: "True",
            explanation: "In Python, the expression `3 == 3 == 3` is evaluated as `(3 == 3) and (3 == 3)`, which is `True`."
          }
        ]
      },
    
      {
        topic: "Search Algorithms",
        questions: [
          {
            id: 203,
            question: "What is the time complexity of binary search on a sorted array?",
            options: [
              "O(n)",
              "O(log n)",
              "O(n log n)",
              "O(1)"
            ],
            answer: "O(log n)",
            explanation: "Binary search has a time complexity of `O(log n)` because it repeatedly divides the search interval in half."
          },
          {
            id: 204,
            question: "What is the best case time complexity of linear search?",
            options: [
              "O(n)",
              "O(log n)",
              "O(1)",
              "O(n^2)"
            ],
            answer: "O(1)",
            explanation: "In the best case scenario, the element you're searching for is at the first position, so linear search has a time complexity of `O(1)`."
          },
          {
            id: 205,
            question: "Which of the following is the main advantage of binary search over linear search?",
            options: [
              "It works on unsorted arrays",
              "It has a better time complexity",
              "It is simpler to implement",
              "It works on small arrays only"
            ],
            answer: "It has a better time complexity",
            explanation: "Binary search has a time complexity of `O(log n)` which is faster than linear search's `O(n)` for large arrays."
          },
          {
            id: 206,
            question: "Which of the following is true about linear search?",
            options: [
              "It requires the array to be sorted",
              "It can search in both sorted and unsorted arrays",
              "It has the same time complexity for both sorted and unsorted arrays",
              "None of the above"
            ],
            answer: "It can search in both sorted and unsorted arrays",
            explanation: "Linear search doesn't require the array to be sorted and works on both sorted and unsorted arrays."
          },
          {
            id: 207,
            question: "What is the worst-case time complexity of binary search?",
            options: [
              "O(n)",
              "O(log n)",
              "O(n^2)",
              "O(1)"
            ],
            answer: "O(log n)",
            explanation: "In the worst case, binary search has a time complexity of `O(log n)` when searching a large sorted array."
          },
          {
            id: 208,
            question: "What is the worst-case scenario for linear search?",
            options: [
              "O(n)",
              "O(1)",
              "O(log n)",
              "None of the above"
            ],
            answer: "O(n)",
            explanation: "In the worst case, linear search has to examine every element in the array, giving it a time complexity of `O(n)`."
          }
        ]
      },
      {
        topic: "Functions",
        questions: [
          {
            id: 209,
            question: "What will be the result of the following code? `def func(a, b=3): return a + b; print(func(5))`",
            options: [
              "8",
              "5",
              "Error",
              "None"
            ],
            answer: "8",
            explanation: "The function `func` has a default value for `b`. When `func(5)` is called, it uses the default value of `b=3`, resulting in 5 + 3 = 8."
          },
          {
            id: 210,
            question: "What does the following Python code return? `def func(*args): return len(args); print(func(1, 2, 3))`",
            options: [
              "3",
              "None",
              "Error",
              "1"
            ],
            answer: "3",
            explanation: "The function `func` uses the `*args` syntax to accept any number of arguments. The length of the arguments passed (1, 2, 3) is `3`."
          },
          {
            id: 211,
            question: "What is the output of this code? `def func(a, b=10): return a * b; print(func(2, 3))`",
            options: [
              "6",
              "10",
              "20",
              "Error"
            ],
            answer: "6",
            explanation: "The function `func` takes `a` and `b`. Since both values are provided (`2` and `3`), the function returns `2 * 3 = 6`."
          },
          {
            id: 212,
            question: "What will the following code print? `def func(x): return lambda y: x + y; print(func(2)(3))`",
            options: [
              "5",
              "Error",
              "None",
              "2"
            ],
            answer: "5",
            explanation: "This function returns a lambda function. When `func(2)` is called, it returns a lambda function `lambda y: 2 + y`, and calling it with `3` results in `2 + 3 = 5`."
          },
          {
            id: 213,
            question: "What will be the result of `def func(a, *args, b=10): return a + sum(args) + b; print(func(2, 3, 4, b=5))`?",
            options: [
              "14",
              "15",
              "20",
              "10"
            ],
            answer: "14",
            explanation: "The function sums up the arguments: `2 + 3 + 4 + 5 = 14`."
          },
          {
            id: 214,
            question: "What will this function return? `def func(*args): return args; print(func(1, 2, 3))`",
            options: [
              "(1, 2, 3)",
              "[1, 2, 3]",
              "None",
              "Error"
            ],
            answer: "(1, 2, 3)",
            explanation: "The `*args` syntax collects the arguments passed into a tuple, so the result will be `(1, 2, 3)`."
          }
        ]
      },
    
      {
        topic: "File Handling",
        questions: [
          {
            id: 215,
            question: "What will happen if you try to open a file for writing (`'w'` mode) that doesn't exist?",
            options: [
              "An error will occur",
              "The file will be created and opened",
              "Nothing will happen",
              "None of the above"
            ],
            answer: "The file will be created and opened",
            explanation: "When opening a file in write mode (`'w'`), if the file doesn't exist, it will be created automatically."
          },
          {
            id: 216,
            question: "What does the `'a'` mode do when opening a file?",
            options: [
              "Opens the file for reading",
              "Appends to the file",
              "Closes the file after writing",
              "Creates a new file"
            ],
            answer: "Appends to the file",
            explanation: "The `'a'` mode opens the file for appending, meaning new content is added at the end of the file without overwriting it."
          },
          {
            id: 217,
            question: "What will be the result of the following code? `with open('file.txt', 'r') as f: print(f.read())`",
            options: [
              "The content of 'file.txt' is printed",
              "An error occurs",
              "None of the above",
              "The file is overwritten"
            ],
            answer: "The content of 'file.txt' is printed",
            explanation: "The `with` statement is used for safe file handling, ensuring the file is properly closed after reading. The content of 'file.txt' will be printed."
          },
          {
            id: 218,
            question: "Which function is used to write to a file in Python?",
            options: [
              "write()",
              "append()",
              "open()",
              "writefile()"
            ],
            answer: "write()",
            explanation: "The `write()` function is used to write text to a file in Python."
          },
          {
            id: 219,
            question: "What does the `pickle` module do in Python?",
            options: [
              "Serialize and deserialize objects",
              "Manage files",
              "Read and write JSON",
              "Process binary data"
            ],
            answer: "Serialize and deserialize objects",
            explanation: "The `pickle` module allows you to serialize (convert to byte stream) and deserialize (reconstruct) Python objects."
          },
          {
            id: 220,
            question: "What does the following code do? `with open('data.txt', 'w') as f: f.write('Hello World')`",
            options: [
              "Writes 'Hello World' to 'data.txt'",
              "Appends 'Hello World' to 'data.txt'",
              "Reads 'data.txt'",
              "Creates a directory"
            ],
            answer: "Writes 'Hello World' to 'data.txt'",
            explanation: "The `with` statement opens the file for writing. It writes 'Hello World' to 'data.txt'."
          }
        ]
      },
    
      {
        topic: "Error Handling",
        questions: [
          {
            id: 221,
            question: "What does the `try` block do in Python?",
            options: [
              "Catches exceptions",
              "Defines the main code logic",
              "Executes code after an exception",
              "None of the above"
            ],
            answer: "Defines the main code logic",
            explanation: "The `try` block is used to define the code that might raise an exception. If an exception occurs, the `except` block will handle it."
          },
          {
            id: 222,
            question: "What is the correct syntax for handling exceptions in Python?",
            options: [
              "try except",
              "try catch",
              "catch except",
              "throw except"
            ],
            answer: "try except",
            explanation: "In Python, exceptions are handled using the `try` block followed by an `except` block to catch the exception."
          },
          {
            id: 223,
            question: "Which of the following is used to raise an exception manually?",
            options: [
              "raise",
              "throw",
              "assert",
              "None of the above"
            ],
            answer: "raise",
            explanation: "The `raise` keyword is used to manually raise an exception in Python."
          },
          {
            id: 224,
            question: "What will the following code do? `try: x = 1/0; except ZeroDivisionError as e: print(e)`",
            options: [
              "Print 'division by zero'",
              "Print 'ZeroDivisionError'",
              "Throw an error",
              "Print 'None'"
            ],
            answer: "Print 'division by zero'",
            explanation: "The `ZeroDivisionError` is caught, and the exception message 'division by zero' will be printed."
          },
          {
            id: 225,
            question: "Which block will execute whether or not an exception is raised?",
            options: [
              "finally",
              "except",
              "try",
              "None"
            ],
            answer: "finally",
            explanation: "The `finally` block is always executed after the `try` block, regardless of whether an exception occurred."
          }
        ]
      },
    
      {
        topic: "Lambda Functions",
        questions: [
          {
            id: 226,
            question: "What is the correct syntax for a lambda function in Python?",
            options: [
              "lambda x: x + 10",
              "function lambda(x): x + 10",
              "def lambda(x): x + 10",
              "None of the above"
            ],
            answer: "lambda x: x + 10",
            explanation: "The syntax for a lambda function in Python is `lambda arguments: expression`. This function adds 10 to the argument `x`."
          },
          {
            id: 227,
            question: "How can you use `map()` with a lambda function?",
            options: [
              "map(lambda x: x*2, [1, 2, 3])",
              "map([1, 2, 3], lambda x: x*2)",
              "map(lambda x: x+1)",
              "None of the above"
            ],
            answer: "map(lambda x: x*2, [1, 2, 3])",
            explanation: "`map()` applies the lambda function to each element of the list. This will double each number in the list [1, 2, 3]."
          },
          {
            id: 228,
            question: "What will be the result of `filter(lambda x: x%2 == 0, [1, 2, 3, 4])`?",
            options: [
              "[2, 4]",
              "[1, 2, 3, 4]",
              "[1, 3]",
              "None"
            ],
            answer: "[2, 4]",
            explanation: "`filter()` filters the list by applying the lambda function. It returns the numbers divisible by 2, which are 2 and 4."
          }
        ]
      },
      {
        topic: "Classes and Objects",
        questions: [
          {
            id: 229,
            question: "What is the output of the following code? `class MyClass: def __init__(self, x): self.x = x; obj = MyClass(10); print(obj.x)`",
            options: [
              "10",
              "Error",
              "None",
              "undefined"
            ],
            answer: "10",
            explanation: "In this code, the `__init__` constructor initializes the attribute `x` of the object, and the value `10` is assigned to `obj.x`."
          },
          {
            id: 230,
            question: "What does the `__str__` method do in Python classes?",
            options: [
              "Returns a string representation of the object",
              "Defines how an object is compared to another",
              "Handles errors in the class",
              "None of the above"
            ],
            answer: "Returns a string representation of the object",
            explanation: "The `__str__` method is used to return a human-readable string representation of the object when the `print()` function is used."
          },
          {
            id: 231,
            question: "Which of the following will create an object of class `Car`? `class Car: def __init__(self, model): self.model = model`",
            options: [
              "car = Car('Tesla')",
              "car = Car()",
              "car = new Car()",
              "car = create Car('Tesla')"
            ],
            answer: "car = Car('Tesla')",
            explanation: "To create an object, we call the class as if it were a function, passing the required arguments to the constructor (`__init__`)."
          },
          {
            id: 232,
            question: "What will be the output of this code? `class Dog: def __init__(self, name): self.name = name; def speak(self): print(self.name + ' barks'); dog = Dog('Rex'); dog.speak()`",
            options: [
              "Rex barks",
              "None",
              "Error",
              "Rex barks and prints None"
            ],
            answer: "Rex barks",
            explanation: "The `speak()` method will print 'Rex barks' since the object `dog` has the `name` attribute set to 'Rex'."
          },
          {
            id: 233,
            question: "Which method is automatically called when an object is created from a class?",
            options: [
              "__str__",
              "__new__",
              "__init__",
              "__call__"
            ],
            answer: "__init__",
            explanation: "The `__init__` method is the constructor, automatically called when an object is instantiated."
          }
        ]
      },
    
      {
        topic: "Inheritance",
        questions: [
          {
            id: 234,
            question: "What will be the output of the following code? `class Animal: def sound(self): return 'Some sound'; class Dog(Animal): def sound(self): return 'Bark'; dog = Dog(); print(dog.sound())`",
            options: [
              "Some sound",
              "Bark",
              "None",
              "Error"
            ],
            answer: "Bark",
            explanation: "Since the `Dog` class overrides the `sound()` method of the `Animal` class, it prints 'Bark'."
          },
          {
            id: 235,
            question: "What is method overriding in Python?",
            options: [
              "Defining a method in a subclass with the same name as the method in the parent class",
              "Calling a method from the parent class",
              "Using the same method name in multiple classes",
              "None of the above"
            ],
            answer: "Defining a method in a subclass with the same name as the method in the parent class",
            explanation: "Method overriding is when a subclass provides a specific implementation for a method that is already defined in its superclass."
          },
          {
            id: 236,
            question: "What does the `super()` function do?",
            options: [
              "Calls a method from the superclass",
              "Calls a method from the subclass",
              "Creates a new class",
              "None of the above"
            ],
            answer: "Calls a method from the superclass",
            explanation: "`super()` is used to call a method from the superclass, often used for method overriding."
          },
          {
            id: 237,
            question: "Which of the following is an example of multiple inheritance in Python?",
            options: [
              "class A: pass; class B(A): pass",
              "class C(A, B): pass",
              "class D(A): pass; class E(B): pass",
              "None of the above"
            ],
            answer: "class C(A, B): pass",
            explanation: "Multiple inheritance occurs when a class inherits from more than one parent class. In this case, `C` inherits from both `A` and `B`."
          },
          {
            id: 238,
            question: "What will happen if you call `super()` in a class without a parent class?",
            options: [
              "It will raise an `AttributeError`",
              "It will return `None`",
              "It will call the `__init__` method of the current class",
              "None of the above"
            ],
            answer: "It will raise an `AttributeError`",
            explanation: "`super()` can only be used if the class has a parent class. Without a parent, it will raise an `AttributeError`."
          }
        ]
      },
    
      {
        topic: "Polymorphism",
        questions: [
          {
            id: 239,
            question: "What is polymorphism in Python?",
            options: [
              "The ability to use a method from a superclass",
              "The ability of different classes to provide a method with the same name but different functionality",
              "A way to use multiple inheritance",
              "None of the above"
            ],
            answer: "The ability of different classes to provide a method with the same name but different functionality",
            explanation: "Polymorphism allows objects of different classes to be treated as objects of a common superclass, with methods having the same name but potentially different behaviors."
          },
          {
            id: 240,
            question: "What will be the result of the following code? `class Cat: def speak(self): return 'Meow'; class Dog: def speak(self): return 'Bark'; pets = [Cat(), Dog()]; for pet in pets: print(pet.speak())`",
            options: [
              "Meow, Bark",
              "Bark, Meow",
              "Error",
              "None of the above"
            ],
            answer: "Meow, Bark",
            explanation: "This demonstrates polymorphism. Both `Cat` and `Dog` classes have the `speak()` method, but with different implementations. The loop calls `speak()` for each pet."
          },
          {
            id: 241,
            question: "How does polymorphism enable code reusability?",
            options: [
              "By allowing different classes to share a common method",
              "By enabling the use of the same class in multiple modules",
              "By forcing the use of specific methods in subclasses",
              "None of the above"
            ],
            answer: "By allowing different classes to share a common method",
            explanation: "Polymorphism enables code reusability by allowing different classes to implement methods with the same name and signature but with different behaviors."
          },
          {
            id: 242,
            question: "Which of the following best demonstrates polymorphism?",
            options: [
              "A method that performs different tasks in different classes",
              "Two methods with the same name but different arguments",
              "Overloading a method",
              "None of the above"
            ],
            answer: "A method that performs different tasks in different classes",
            explanation: "Polymorphism allows a method to perform different tasks based on the class of the object calling it."
          }
        ]
      },
    
      {
        topic: "Encapsulation",
        questions: [
          {
            id: 243,
            question: "What is encapsulation in Python?",
            options: [
              "The process of hiding the internal details of an object",
              "The process of creating multiple objects from a class",
              "The ability to create a method with the same name in different classes",
              "None of the above"
            ],
            answer: "The process of hiding the internal details of an object",
            explanation: "Encapsulation is the concept of restricting access to the internal state of an object and providing methods to interact with it."
          },
          {
            id: 244,
            question: "What is the difference between public, private, and protected members in Python?",
            options: [
              "Public members can be accessed anywhere, private members can only be accessed inside the class, and protected members can be accessed within the class and subclasses",
              "Private members can be accessed anywhere, public members can only be accessed inside the class",
              "Protected members can be accessed anywhere, public members can only be accessed inside the class",
              "None of the above"
            ],
            answer: "Public members can be accessed anywhere, private members can only be accessed inside the class, and protected members can be accessed within the class and subclasses",
            explanation: "In Python, public members are accessible from anywhere, private members are denoted by `__` and are restricted to the class, and protected members are denoted by `_` and are accessible in subclasses."
          },
          {
            id: 245,
            question: "What will be the result of this code? `class MyClass: def __init__(self): self.__x = 5; def get_x(self): return self.__x; obj = MyClass(); print(obj.__x)`",
            options: [
              "Error",
              "None",
              "5",
              "None of the above"
            ],
            answer: "Error",
            explanation: "The attribute `__x` is private and cannot be accessed directly from outside the class. It will raise an `AttributeError`."
          }
        ]
      },
      {
        topic: "Abstract Classes",
        questions: [
          {
            id: 246,
            question: "What is the purpose of an abstract class in Python?",
            options: [
              "To provide a blueprint for other classes",
              "To store data",
              "To prevent object creation",
              "None of the above"
            ],
            answer: "To provide a blueprint for other classes",
            explanation: "An abstract class in Python is a class that cannot be instantiated directly and is meant to be subclassed. It may contain abstract methods that subclasses must implement."
          },
          {
            id: 247,
            question: "What is the difference between an abstract class and a regular class?",
            options: [
              "An abstract class cannot be instantiated, while a regular class can",
              "A regular class does not have abstract methods",
              "Both of the above",
              "None of the above"
            ],
            answer: "Both of the above",
            explanation: "Abstract classes are used to define a common interface for subclasses but cannot be instantiated. Regular classes can be instantiated and may not necessarily have abstract methods."
          },
          {
            id: 248,
            question: "Which module in Python provides the functionality to create an abstract class?",
            options: [
              "abc",
              "abstract",
              "sys",
              "collections"
            ],
            answer: "abc",
            explanation: "The `abc` module provides tools to define abstract classes using the `ABC` class and the `@abstractmethod` decorator."
          },
          {
            id: 249,
            question: "What will be the result of the following code? `from abc import ABC, abstractmethod; class Shape(ABC): @abstractmethod def area(self): pass; class Circle(Shape): def area(self): return 3.14 * self.radius; circle = Circle(); circle.area()`",
            options: [
              "Error, because `Shape` is abstract and cannot be instantiated",
              "Error, because `Circle` is missing an implementation of `area`",
              "The method `area` will return the area of the circle",
              "None of the above"
            ],
            answer: "Error, because `Shape` is abstract and cannot be instantiated",
            explanation: "You cannot instantiate an abstract class. The `Shape` class is abstract and should not be instantiated directly."
          }
        ]
      },
      {
        topic: "Interfaces",
        questions: [
          {
            id: 250,
            question: "What is an interface in Python?",
            options: [
              "A class that only defines method signatures but not their implementation",
              "A type of abstract class",
              "A class that cannot be subclassed",
              "None of the above"
            ],
            answer: "A class that only defines method signatures but not their implementation",
            explanation: "An interface in Python is a conceptual design to define method signatures without implementation. Python does not have built-in support for interfaces like other languages."
          },
          {
            id: 251,
            question: "How can you define an interface in Python?",
            options: [
              "By defining an abstract class with only abstract methods",
              "By using the `interface` keyword",
              "By using `@interface` decorator",
              "By defining a class with only private methods"
            ],
            answer: "By defining an abstract class with only abstract methods",
            explanation: "In Python, interfaces are commonly implemented using abstract classes, where all methods are abstract (defined using `@abstractmethod`)."
          }
        ]
      },
      {
        topic: "Decorators",
        questions: [
          {
            id: 252,
            question: "What is the purpose of decorators in Python?",
            options: [
              "To modify or enhance the behavior of functions or methods",
              "To provide class-level methods",
              "To create new classes",
              "None of the above"
            ],
            answer: "To modify or enhance the behavior of functions or methods",
            explanation: "Decorators are used in Python to modify the behavior of functions or methods. They are often used for logging, enforcing access control, memoization, etc."
          },
          {
            id: 253,
            question: "How would you apply a decorator to a function?",
            options: [
              "@decorator_name function_name()",
              "decorator_name(function_name)",
              "@function_name@decorator",
              "None of the above"
            ],
            answer: "@decorator_name function_name()",
            explanation: "To apply a decorator, you place the decorator name with `@` above the function definition."
          },
          {
            id: 254,
            question: "What will be the output of the following code? `def decorator(func): def wrapper(): print('Before'); func(); print('After'); return wrapper; @decorator def say_hello(): print('Hello'); say_hello()`",
            options: [
              "Hello",
              "Before\nHello\nAfter",
              "Error, because the decorator is incorrectly applied",
              "None of the above"
            ],
            answer: "Before\nHello\nAfter",
            explanation: "The decorator modifies the behavior of `say_hello` by adding functionality before and after the function call."
          }
        ]
      },
      {
        topic: "Generators",
        questions: [
          {
            id: 255,
            question: "What is the key advantage of using generators in Python?",
            options: [
              "Memory efficiency",
              "Faster execution speed",
              "Easier syntax",
              "None of the above"
            ],
            answer: "Memory efficiency",
            explanation: "Generators are memory efficient because they yield values one at a time instead of returning all of them at once, making them suitable for processing large datasets."
          },
          {
            id: 256,
            question: "What will be the result of the following code? `def count_up_to(n): count = 1; while count <= n: yield count; count += 1; counter = count_up_to(5); print(next(counter))`",
            options: [
              "1",
              "5",
              "None of the above",
              "Error"
            ],
            answer: "1",
            explanation: "This code defines a generator `count_up_to()`. Calling `next(counter)` will return the first value produced by the generator, which is 1."
          }
        ]
      },
      {
        topic: "Context Managers",
        questions: [
          {
            id: 257,
            question: "What is the purpose of a context manager in Python?",
            options: [
              "To manage resources such as files and network connections",
              "To handle exceptions gracefully",
              "To perform complex computations",
              "None of the above"
            ],
            answer: "To manage resources such as files and network connections",
            explanation: "Context managers are used to manage resources efficiently, ensuring that resources are properly cleaned up after use, such as closing files or releasing locks."
          },
          {
            id: 258,
            question: "Which Python statement is used with context managers?",
            options: [
              "with",
              "for",
              "try",
              "while"
            ],
            answer: "with",
            explanation: "The `with` statement is used in Python to wrap the execution of code within a context manager. It ensures proper resource management by calling `__enter__` and `__exit__` methods."
          },
          {
            id: 259,
            question: "What will be the result of the following code? `class MyContextManager: def __enter__(self): print('Entering'); return self; def __exit__(self, exc_type, exc_value, traceback): print('Exiting'); with MyContextManager() as cm: print('Inside')`",
            options: [
              "Entering\nInside\nExiting",
              "Inside\nEntering\nExiting",
              "Error, because `__enter__` method is not defined properly",
              "None of the above"
            ],
            answer: "Entering\nInside\nExiting",
            explanation: "The `with` statement triggers `__enter__` when entering the context and `__exit__` when exiting the context. This ensures that resource management happens automatically."
          }
        ]
      },
      {
        topic: "Concurrency",
        questions: [
          {
            id: 260,
            question: "What is the difference between threading and multiprocessing in Python?",
            options: [
              "Threading runs in the same process, while multiprocessing runs in separate processes",
              "Threading runs in separate processes, while multiprocessing runs in the same process",
              "Threading and multiprocessing are the same",
              "None of the above"
            ],
            answer: "Threading runs in the same process, while multiprocessing runs in separate processes",
            explanation: "Threading shares the same memory space, whereas multiprocessing runs in separate memory spaces, which makes multiprocessing suitable for CPU-bound tasks."
          },
          {
            id: 261,
            question: "What does the `GIL` (Global Interpreter Lock) in Python do?",
            options: [
              "It prevents multiple threads from executing in parallel in the CPython interpreter",
              "It speeds up the execution of code in multi-threaded programs",
              "It manages memory allocation for variables",
              "None of the above"
            ],
            answer: "It prevents multiple threads from executing in parallel in the CPython interpreter",
            explanation: "The GIL is a mutex in CPython that prevents multiple native threads from executing Python bytecodes at once. It allows only one thread to execute Python code at a time."
          }
        ]
      },
      {
        topic: "String Methods",
        questions: [
          {
            id: 262,
            question: "What will be the result of the following code? `s = 'hello world'; s = s.replace('world', 'Python'); print(s)`",
            options: [
              "'hello world'",
              "'hello Python'",
              "'world Python'",
              "'Python world'"
            ],
            answer: "'hello Python'",
            explanation: "The `replace()` method returns a new string with all occurrences of the substring replaced. In this case, 'world' is replaced with 'Python'."
          },
          {
            id: 263,
            question: "Which method would you use to remove leading whitespace from a string?",
            options: [
              "strip()",
              "lstrip()",
              "rstrip()",
              "remove()"
            ],
            answer: "lstrip()",
            explanation: "`lstrip()` removes leading whitespace (spaces at the start of the string)."
          },
          {
            id: 264,
            question: "What will be the result of the following code? `s = 'python is fun'; s = s.upper().replace('PYTHON', 'JAVA'); print(s)`",
            options: [
              "'JAVA IS FUN'",
              "'python is fun'",
              "'JAVA IS FUN'",
              "'PYTHON IS FUN'"
            ],
            answer: "'JAVA IS FUN'",
            explanation: "The `upper()` method makes the string uppercase, so 'python is fun' becomes 'PYTHON IS FUN'. Then, `replace()` changes 'PYTHON' to 'JAVA'."
          },
          {
            id: 265,
            question: "What will be the result of the following code? `s = 'hello'; print(s[::2])`",
            options: [
              "'hll'",
              "'hello'",
              "'eol'",
              "'ol'"
            ],
            answer: "'hll'",
            explanation: "The slicing operation `s[::2]` returns every second character starting from the first character, which results in 'hll'."
          },
          {
            id: 266,
            question: "What does the `translate()` method in Python do?",
            options: [
              "Converts all characters to lowercase",
              "Converts characters based on a translation map",
              "Replaces characters with their Unicode equivalent",
              "None of the above"
            ],
            answer: "Converts characters based on a translation map",
            explanation: "The `translate()` method in Python replaces characters in a string based on a translation table, which is usually created using `str.maketrans()`."
          }
        ]
      },
      {
        topic: "List Methods",
        questions: [
          {
            id: 267,
            question: "What will be the output of the following code? `lst = [1, 2, 3, 4]; lst.append(5); lst.insert(2, 6); print(lst)`",
            options: [
              "[1, 2, 6, 3, 4, 5]",
              "[1, 2, 5, 6, 3, 4]",
              "[1, 2, 3, 6, 4, 5]",
              "[1, 2, 6, 3, 4]"
            ],
            answer: "[1, 2, 6, 3, 4, 5]",
            explanation: "`append()` adds 5 at the end of the list, while `insert(2, 6)` inserts 6 at index 2, so the final list is `[1, 2, 6, 3, 4, 5]`."
          },
          {
            id: 268,
            question: "What will the result be of the following code? `lst = [1, 2, 3]; lst.remove(2); print(lst)`",
            options: [
              "[1, 3]",
              "[1, 2, 3]",
              "[2, 3]",
              "Error"
            ],
            answer: "[1, 3]",
            explanation: "`remove()` removes the first occurrence of the specified value (2 in this case). The resulting list is `[1, 3]`."
          },
          {
            id: 269,
            question: "Which method is used to reverse a list in-place in Python?",
            options: [
              "reverse()",
              "reversed()",
              "flip()",
              "reverse_inplace()"
            ],
            answer: "reverse()",
            explanation: "`reverse()` is an in-place method that reverses the elements of the list. It does not return a new list but modifies the original list."
          },
          {
            id: 270,
            question: "What is the difference between `remove()` and `pop()` in Python lists?",
            options: [
              "`remove()` removes an element by value, `pop()` removes by index",
              "`remove()` removes an element by index, `pop()` removes by value",
              "Both work the same way",
              "None of the above"
            ],
            answer: "`remove()` removes an element by value, `pop()` removes by index",
            explanation: "`remove()` removes the first occurrence of a specified value, while `pop()` removes an element by its index."
          },
          {
            id: 271,
            question: "What will be the output of the following code? `lst = [10, 20, 30]; lst = lst * 2; print(lst)`",
            options: [
              "[10, 20, 30, 10, 20, 30]",
              "[10, 20, 30, 20, 30]",
              "[10, 10, 20, 20, 30, 30]",
              "[10, 20, 30]"
            ],
            answer: "[10, 20, 30, 10, 20, 30]",
            explanation: "The `*` operator when used with a list repeats the list. Here, `lst * 2` will repeat the list twice, resulting in `[10, 20, 30, 10, 20, 30]`."
          }
        ]
      },
      {
        topic: "Set Methods",
        questions: [
          {
            id: 272,
            question: "What will be the result of the following code? `s = {1, 2, 3, 4}; s.add(5); s.remove(3); print(s)`",
            options: [
              "{1, 2, 4, 5}",
              "{1, 2, 3, 4, 5}",
              "{1, 2, 5}",
              "Error"
            ],
            answer: "{1, 2, 4, 5}",
            explanation: "`add()` adds 5 to the set, and `remove()` removes 3 from the set. The final set is `{1, 2, 4, 5}`."
          },
          {
            id: 273,
            question: "Which method would you use to get the common elements between two sets?",
            options: [
              "union()",
              "intersection()",
              "difference()",
              "symmetrical_difference()"
            ],
            answer: "intersection()",
            explanation: "`intersection()` returns a set containing the elements that are common between two sets."
          },
          {
            id: 274,
            question: "What will be the result of the following code? `s = {1, 2, 3}; t = {3, 4, 5}; print(s - t)`",
            options: [
              "{1, 2}",
              "{4, 5}",
              "{3}",
              "{1, 2, 3, 4, 5}"
            ],
            answer: "{1, 2}",
            explanation: "`s - t` returns the set of elements present in `s` but not in `t`, which is `{1, 2}`."
          },
          {
            id: 275,
            question: "Which method would you use to remove all elements from a set?",
            options: [
              "clear()",
              "reset()",
              "delete()",
              "remove()"
            ],
            answer: "clear()",
            explanation: "`clear()` removes all elements from a set."
          },
          {
            id: 276,
            question: "What will be the result of the following code? `s = {1, 2, 3}; s.discard(4); print(s)`",
            options: [
              "{1, 2, 3}",
              "{2, 3}",
              "{4}",
              "Error"
            ],
            answer: "{1, 2, 3}",
            explanation: "`discard()` removes the element if present, but does nothing if the element is not in the set. Since 4 is not in the set, the set remains unchanged."
          }
        ]
      },
      {
        topic: "Dictionary Methods",
        questions: [
          {
            id: 277,
            question: "What will be the result of the following code? `d = {'a': 1, 'b': 2}; d['c'] = 3; del d['b']; print(d)`",
            options: [
              "{'a': 1, 'c': 3}",
              "{'a': 1, 'b': 2, 'c': 3}",
              "{'a': 1, 'c': 3, 'b': 2}",
              "{'c': 3, 'b': 2}"
            ],
            answer: "{'a': 1, 'c': 3}",
            explanation: "First, `d['c'] = 3` adds the key-value pair `'c': 3` to the dictionary. Then, `del d['b']` removes the key-value pair `'b': 2`, leaving `{'a': 1, 'c': 3}`."
          },
          {
            id: 278,
            question: "Which method would you use to get all the keys from a dictionary?",
            options: [
              "keys()",
              "values()",
              "items()",
              "get()"
            ],
            answer: "keys()",
            explanation: "`keys()` returns a view object that displays all the keys in the dictionary."
          },
          {
            id: 279,
            question: "What is the result of the following code? `d = {'a': 1, 'b': 2}; print(d.get('c', 0))`",
            options: [
              "1",
              "2",
              "None",
              "0"
            ],
            answer: "0",
            explanation: "The `get()` method returns the value associated with the key if it exists, otherwise it returns the default value (0 in this case) if the key is not found."
          },
          {
            id: 280,
            question: "What will be the output of the following code? `d = {'x': 10, 'y': 20}; d.update({'x': 15, 'z': 25}); print(d)`",
            options: [
              "{'x': 15, 'y': 20, 'z': 25}",
              "{'x': 10, 'y': 20, 'z': 25}",
              "{'x': 15, 'y': 20}",
              "{'y': 20, 'z': 25}"
            ],
            answer: "{'x': 15, 'y': 20, 'z': 25}",
            explanation: "`update()` updates the value of the key `'x'` to 15, and adds the new key-value pair `'z': 25`."
          },
          {
            id: 281,
            question: "What will be the output of the following code? `d = {'a': 1, 'b': 2, 'c': 3}; d.pop('b'); print(d)`",
            options: [
              "{'a': 1, 'c': 3}",
              "{'a': 1, 'b': 2}",
              "{'b': 2, 'c': 3}",
              "Error"
            ],
            answer: "{'a': 1, 'c': 3}",
            explanation: "`pop()` removes and returns the value of the specified key ('b' in this case), leaving `{'a': 1, 'c': 3}`."
          }
        ]
      },
      {
        topic: "Tuple Methods",
        questions: [
          {
            id: 282,
            question: "Which of the following methods is available for tuples in Python?",
            options: [
              "append()",
              "insert()",
              "pop()",
              "count()"
            ],
            answer: "count()",
            explanation: "Tuples are immutable, so methods like `append()`, `insert()`, and `pop()` are not available for tuples. However, `count()` can be used to count the occurrences of an element in a tuple."
          },
          {
            id: 283,
            question: "What will be the result of the following code? `t = (1, 2, 2, 3); print(t.index(2))`",
            options: [
              "1",
              "2",
              "0",
              "Error"
            ],
            answer: "1",
            explanation: "`index()` returns the first index of the specified element, so `t.index(2)` returns 1, which is the index of the first occurrence of 2."
          },
          {
            id: 284,
            question: "What will be the result of the following code? `t = (1, 2, 3, 4); t[2] = 5; print(t)`",
            options: [
              "(1, 2, 5, 4)",
              "(1, 2, 3, 4)",
              "Error",
              "(1, 5, 3, 4)"
            ],
            answer: "Error",
            explanation: "Tuples are immutable, so trying to modify an element (`t[2] = 5`) results in a `TypeError`."
          },
          {
            id: 285,
            question: "What will be the result of the following code? `t = (1, 2, 3, 4); print(t[:3])`",
            options: [
              "(1, 2, 3)",
              "(2, 3, 4)",
              "(1, 2, 3, 4)",
              "(4, 3, 2, 1)"
            ],
            answer: "(1, 2, 3)",
            explanation: "The slicing operation `t[:3]` returns a new tuple with the first three elements of the tuple."
          },
          {
            id: 286,
            question: "Which of the following methods is used to find the number of elements with a specified value in a tuple?",
            options: [
              "count()",
              "index()",
              "find()",
              "sum()"
            ],
            answer: "count()",
            explanation: "`count()` is used to return the number of occurrences of a specified value in the tuple."
          }
        ]
      },
      {
        topic: "Advanced String Methods",
        questions: [
          {
            id: 287,
            question: "What will be the result of the following code? `s = 'abc123'; s.isalpha()`",
            options: [
              "True",
              "False",
              "Error",
              "None"
            ],
            answer: "False",
            explanation: "`isalpha()` returns `True` if all characters in the string are alphabetic. Since `s` contains digits (`123`), it returns `False`."
          },
          {
            id: 288,
            question: "What does the `partition()` method do in Python?",
            options: [
              "Splits the string into three parts: the part before the separator, the separator, and the part after",
              "Splits the string into a list of words",
              "Replaces a specified substring with a new substring",
              "None of the above"
            ],
            answer: "Splits the string into three parts: the part before the separator, the separator, and the part after",
            explanation: "`partition()` splits the string into three parts based on the separator. For example, `'hello world'.partition(' ')` would return `('hello', ' ', 'world')`."
          },
          {
            id: 289,
            question: "What is the output of the following code? `s = '123abc'; print(s.zfill(6))`",
            options: [
              "'123abc'",
              "'0123abc'",
              "'00123abc'",
              "'123abc0'"
            ],
            answer: "'00123abc'",
            explanation: "`zfill()` pads the string with zeros from the left to make the length of the string equal to the specified width. In this case, the result is `'00123abc'`."
          },
          {
            id: 290,
            question: "What will be the result of the following code? `s = 'hello'; print(s.center(10, '*'))`",
            options: [
              "'hello*****'",
              "'*hello*****'",
              "'**hello****'",
              "'hello*****'"
            ],
            answer: "'**hello****'",
            explanation: "`center()` centers the string within the specified width and pads it with the specified character (`'*'` in this case). The result is `'**hello****'`."
          },
          {
            id: 291,
            question: "What will be the result of the following code? `s = '12345'; s.rjust(8, '0')`",
            options: [
              "'12345000'",
              "'00012345'",
              "'0012345'",
              "'1234500'"
            ],
            answer: "'00012345'",
            explanation: "`rjust()` right-aligns the string within the specified width, padding it with the specified character (`'0'`). The result is `'00012345'`."
          }
        ]
      },
      {
        topic: "Set Methods",
        questions: [
          {
            id: 292,
            question: "What will be the output of the following code? `s = {1, 2, 3}; s.add(4); print(s)`",
            options: [
              "{1, 2, 3, 4}",
              "{1, 2, 3}",
              "Error",
              "{4, 1, 2, 3}"
            ],
            answer: "{1, 2, 3, 4}",
            explanation: "`add()` adds an element to the set, and since sets are unordered, the position of the added element doesn't matter. The output will be `{1, 2, 3, 4}`."
          },
          {
            id: 293,
            question: "What will be the output of the following code? `s = {1, 2, 3}; s.remove(2); print(s)`",
            options: [
              "{1, 3}",
              "{2, 3}",
              "Error",
              "{1, 2, 3}"
            ],
            answer: "{1, 3}",
            explanation: "`remove()` removes the specified element from the set. In this case, `2` is removed, leaving `{1, 3}`."
          },
          {
            id: 294,
            question: "What happens when you try to remove an element that doesn't exist in a set using `remove()`?",
            options: [
              "It raises a KeyError",
              "It returns `None`",
              "It does nothing",
              "It raises a ValueError"
            ],
            answer: "It raises a KeyError",
            explanation: "`remove()` raises a `KeyError` if the specified element is not found in the set."
          },
          {
            id: 295,
            question: "Which method would you use to get the common elements between two sets?",
            options: [
              "intersection()",
              "union()",
              "difference()",
              "symmetric_difference()"
            ],
            answer: "intersection()",
            explanation: "`intersection()` returns a set containing the elements common to both sets."
          },
          {
            id: 296,
            question: "What will be the result of the following code? `s = {1, 2, 3, 4}; s.discard(5); print(s)`",
            options: [
              "{1, 2, 3, 4}",
              "{1, 2, 3}",
              "{5, 1, 2, 3, 4}",
              "Error"
            ],
            answer: "{1, 2, 3, 4}",
            explanation: "`discard()` removes the specified element if it exists, but does not raise an error if the element is not found. Therefore, the output remains `{1, 2, 3, 4}`."
          }
        ]
      },
      {
        topic: "String Methods (Advanced)",
        questions: [
          {
            id: 297,
            question: "What is the result of the following code? `s = 'hello world'; print(s.split('l'))`",
            options: [
              "['he', '', 'o wor', 'd']",
              "['hello world']",
              "['h', 'o world']",
              "['he', 'o world']"
            ],
            answer: "['he', '', 'o wor', 'd']",
            explanation: "`split('l')` splits the string wherever the character `'l'` appears. The result is `['he', '', 'o wor', 'd']`."
          },
          {
            id: 298,
            question: "What does the `translate()` method do in Python?",
            options: [
              "Replaces each character in the string with its corresponding value from the translation table",
              "Translates the string from one language to another",
              "Concatenates the string with another string",
              "None of the above"
            ],
            answer: "Replaces each character in the string with its corresponding value from the translation table",
            explanation: "`translate()` is used to map each character in the string to a corresponding character based on the provided translation table."
          },
          {
            id: 299,
            question: "What will be the result of the following code? `s = 'abcdef'; print(s.translate({ord('a'): 'z', ord('b'): 'y'}))`",
            options: [
              "zycdef",
              "zbcdef",
              "abcdef",
              "zcddef"
            ],
            answer: "zycdef",
            explanation: "The `translate()` method maps characters in the string using the translation table. Here, `'a'` is replaced by `'z'` and `'b'` is replaced by `'y'`."
          },
          {
            id: 300,
            question: "What will be the result of the following code? `s = 'hello'; print(s.replace('e', 'a'))`",
            options: [
              "'hallo'",
              "'hallo world'",
              "'hello'",
              "'hallo world'"
            ],
            answer: "'hallo'",
            explanation: "`replace()` replaces the first occurrence of the substring `'e'` with `'a'`, resulting in `'hallo'`."
          },
          {
            id: 301,
            question: "What is the output of the following code? `s = 'hello world'; print(s.startswith('he'))`",
            options: [
              "True",
              "False",
              "Error",
              "None"
            ],
            answer: "True",
            explanation: "`startswith()` checks if the string starts with the specified prefix (`'he'`), returning `True` because the string starts with `'he'`."
          }
        ]
      },
      {
        topic: "File Handling Methods",
        questions: [
          {
            id: 302,
            question: "Which of the following modes is used to open a file for writing only (and creates the file if it doesn't exist)?",
            options: [
              "'r'",
              "'w'",
              "'a'",
              "'x'"
            ],
            answer: "'w'",
            explanation: "`'w'` mode is used to open a file for writing. If the file does not exist, it will be created."
          },
          {
            id: 303,
            question: "What will be the output of the following code? `f = open('file.txt', 'w'); f.write('hello'); f.close(); f = open('file.txt', 'r'); print(f.read())`",
            options: [
              "'hello'",
              "''",
              "'file.txt'",
              "Error"
            ],
            answer: "'hello'",
            explanation:"The file is opened in write mode (`'w'`) and `'hello'` is written to it. After closing the file and reopening it in read mode (`'r'`), the content `'hello'` is read and printed."
          },
          {
            id: 304,
            question: "What does the `readlines()` method do in Python?",
            options: [
              "Reads the entire file as a single string",
              "Reads a specific number of bytes",
              "Reads the content of the file as a list of lines",
              "None of the above"
            ],
            answer: "Reads the content of the file as a list of lines",
            explanation: "`readlines()` reads all the lines in the file and returns them as a list, where each element is a line from the file."
          },
          {
            id: 305,
            question: "What will be the result of the following code? `f = open('file.txt', 'a'); f.write('hello'); f.close(); f = open('file.txt', 'r'); print(f.read())`",
            options: [
              "'hello'",
              "'hellohello'",
              "'hello world'",
              "Error"
            ],
            answer: "'hello'",
            explanation: "`'a'` mode opens the file for appending, so `'hello'` is added to the existing content of the file. If the file initially contains no data, the result will be `'hello'`."
          },
          {
            id: 306,
            question: "What is the correct way to open a file for reading and writing without truncating its content?",
            options: [
              "'r+'",
              "'w+'",
              "'a+'",
              "'r'"
            ],
            answer: "'r+'",
            explanation: "`'r+'` mode opens the file for both reading and writing without truncating the file content."
          }
        ]
      },
      {
        topic: "Mixed Collection",
        questions: [
          {
            id: 1,
            question: "What will be the output of the following code?\n\n    a=\"softwarica\"\n    print(a.upper())",
            options: [
              "softwarica",
              "SOFTWARICA",
              "Softwarica",
              "Error"
            ],
            answer: "SOFTWARICA",
            explanation: "The `upper()` method converts all lowercase letters in a string to uppercase."
          },
          {
            id: 2,
            question: "What will be the output of the following code?\n\n    a=\"@@PYTHON\"\n    print(a.isupper())",
            options: [
              "True",
              "False",
              "Error",
              "None"
            ],
            answer: "True",
            explanation: "The `isupper()` method returns `True` if all alphabetic characters in the string are uppercase. Special characters like `@@` do not affect this check."
          },
          {
            id: 3,
            question: "What will be the output of the following code?\n\n    a=\"@@PYTHON\"\n    print(\"a\".isupper())",
            options: [
              "True",
              "False",
              "Error",
              "None"
            ],
            answer: "False",
            explanation: "The `isupper()` method checks if all letters in the string are uppercase. Since `'a'` is lowercase, it returns `False`."
          },
          {
            id: 4,
            question: "What will be the output of the following code?\n\n    a=\"capital\"\n    print(\"A\".isupper())",
            options: [
              "True",
              "False",
              "Error",
              "None"
            ],
            answer: "True",
            explanation: "The `isupper()` method checks if a letter is uppercase. Since `'A'` is uppercase, it returns `True`."
          },
          {
            id: 5,
            question: "What will be the output of the following code?\n\n    a=\"capital\"\n    print(\"a\")",
            options: [
              "a",
              "capital",
              "Error",
              "None"
            ],
            answer: "a",
            explanation: "The statement simply prints the string `'a'`, not the variable `a`."
          },
          {
            id: 6,
            question: "What will be the output of the following code?\n\n    a=\"capital\"\n    print(a.capitalize(\"c\"))",
            options: [
              "Capital",
              "Error",
              "capital",
              "None"
            ],
            answer: "Error",
            explanation: "The `capitalize()` method does not take any arguments. Calling it with an argument results in an error."
          },
          {
            id: 7,
            question: "What will be the output of the following code?\n\n    a=\"      capital\"\n    print(a.isalnum())",
            options: [
              "True",
              "False",
              "Error",
              "None"
            ],
            answer: "False",
            explanation: "The `isalnum()` method returns `True` if all characters are alphanumeric. Since the string contains leading spaces, it returns `False`."
          },
          {
            id: 8,
            question: "What will be the output of the following code?\n\n    a=\"capital\"\n    print(a.isalnum())",
            options: [
              "True",
              "False",
              "Error",
              "None"
            ],
            answer: "True",
            explanation: "The string `'capital'` contains only letters, which are alphanumeric, so `isalnum()` returns `True`."
          },
          {
            id: 9,
            question: "What will be the output of the following code?\n\n    a=\"1Capital\"\n    print(a.zfill(9))",
            options: [
              "01Capital",
              "1Capital",
              "001Capital",
              "Error"
            ],
            answer: "01Capital",
            explanation: "The `zfill()` method pads the string with zeros until it reaches the specified length. Here, it fills the remaining spaces to make the length 9."
          },
          {
            id: 10,
            question: "What will be the output of the following code?\n\n    a=\"+Capital\"\n    print(a.zfill(9))",
            options: [
              "000+Capital",
              "+0Capital",
              "+Capital",
              "Error"
            ],
            answer: "+0Capital",
            explanation: "The `zfill()` method pads with zeros to the left, but places the `'+'` sign at the beginning."
          },
          {
            id: 11,
            question: "What will be the output of the following code?\n\n    a=\"-Capital\"\n    print(a.zfill(9))",
            options: [
              "-0Capital",
              "000-Capital",
              "-Capital",
              "Error"
            ],
            answer: "-0Capital",
            explanation: "The `zfill()` method fills the string with leading zeros while preserving the `'-'` sign at the beginning."
          },
          {
            id: 12,
            question: "What will be the output of the following code?\n\n    a=\"$Capital\"\n    print(a.zfill(9))",
            options: [
              "0$Capital",
              "000$Capital",
              "$Capital",
              "Error"
            ],
            answer: "0$Capital",
            explanation: "The `zfill()` method pads the string with zeros while maintaining the `'$'` sign at the beginning."
          },
          {
            id: 13,
            question: "What will be the output of the following code?\n\n    a=\"$Capital\"\n    print(a.zfill(9,\"**\"))",
            options: [
              "$***Capital",
              "Error",
              "****$Capital",
              "$000Capital"
            ],
            answer: "Error",
            explanation: "The `zfill()` method does not take a second argument. The correct usage only allows a single integer as input."
          },
          {
            id: 14,
            question: "What will be the output of the following code?\n\n    a=\"$Capital\"\n    print(a.center(9,\"**\"))",
            options: [
              "**$Capital**",
              "*$Capital*",
              "$Capital",
              "Error"
            ],
            answer: "Error",
            explanation: "The fill character must be one character only"
          },
          {
            id: 15,
            question: "What will be the output of the following code?\n\n    a=\"+Capital\"\n    print(a.center(9,\"*\"))",
            options: [
              "**+Capital**",
              "*+Capital",
              "+Capital",
              "Error"
            ],
            answer: "*+Capital",
            explanation: "The `center()` method pads the string to the given width using the specified fill character (`'*'`)."
          },
          {
            id: 16,
            question: "What will be the output of the following code?\n\n    a=\"+Capital9\"\n    print(a.count(\"9\"))",
            options: [
              "1",
              "2",
              "0",
              "Error"
            ],
            answer: "1",
            explanation: "The `count()` method returns the number of times the specified substring appears in the string."
          },
          {
            id: 17,
            question: "What will be the output of the following code?\n\n    a=\"+Cap9ital9\"\n    print(a.find(\"9\"))",
            options: [
              "4",
              "5",
              "6",
              "-1"
            ],
            answer: "4",
            explanation: "The `find()` method returns the index of the first occurrence of the specified substring (`'9'` is at index 4)."
          },
          {
            id: 18,
            question: "What will be the output of the following code?\n\n    a=\"+Cap9ital9\"\n    print(a.rfind(\"9\"))",
            options: [
              "4",
              "5",
              "9",
              "Error"
            ],
            answer: "9",
            explanation: "The `rfind()` method returns the highest index at which the substring appears in the string."
          },
          {
            id: 19,
            question: "What will be the output of the following code?\n\n    a=\"+Cap9ital9\"\n    print(a.find(\"A\"))",
            options: [
              "-1",
              "0",
              "1",
              "Error"
            ],
            answer: "-1",
            explanation: "The `find()` method returns `-1` if the specified substring (`'A'`) is not found in the string."
          },
          {
            id: 20,
            question: "What will be the output of the following code?\n\n    a=\"Cap9\"\n    print(a.isdigit())",
            options: [
              "True",
              "False",
              "Error",
              "None"
            ],
            answer: "False",
            explanation: "The `isdigit()` method returns `False` because the string contains non-numeric characters (`'Cap'`)."
          },
          {
            id: 21,
            question: "What will be the output of the following code?\n\n    a=\"pythON9\"\n    print(a.swapcase())",
            options: [
              "PYTHon9",
              "PYTHON9",
              "python9",
              "Error"
            ],
            answer: "PYTHon9",
            explanation: "The `swapcase()` method converts uppercase letters to lowercase and vice versa."
          },
          {
            id: 22,
            question: "What will be the output of the following code?\n\n    a=\"\\t\"\n    print(a.isspace())",
            options: [
              "True",
              "False",
              "Error",
              "None"
            ],
            answer: "True",
            explanation: "The `isspace()` method returns `True` if the string consists only of whitespace characters (like spaces and tabs)."
          },
          {
            id: 23,
            question: "What will be the output of the following code?\n\n    a=\"\\t\"\n    print(a.isprintable())",
            options: [
              "True",
              "False",
              "Error",
              "None"
            ],
            answer: "False",
            explanation: "The `isprintable()` method returns `False` for non-printable characters like tab (`'\\t'`)."
          },
          {
            id: 24,
            question: "What will be the output of the following code?\n\n    a=\"123abc\"\n    print(a.isalpha())",
            options: [
              "True",
              "False",
              "Error",
              "None"
            ],
            answer: "False",
            explanation: "The `isalpha()` method returns `False` because the string contains numeric characters in addition to letters."
          },
          {
            id: 25,
            question: "What will be the output of the following code?\n\n    a=\"123abc\"\n    print(a.rjust(11,\"#\"))",
            options: [
              "#####123abc",
              "123abc#####",
              "123abc",
              "Error"
            ],
            answer: "#####123abc",
            explanation: "The `rjust()` method right-aligns the string and pads it with the specified character (`'#'`) to the left."
          },
          {
            id: 26,
            question: "What will be the output of the following code?\n\n    a=\"123abc\"\n    print(a.ljust(11,\"#\"))",
            options: [
              "#####123abc",
              "123abc#####",
              "123abc",
              "Error"
            ],
            answer: "123abc#####",
            explanation: "The `ljust()` method left-aligns the string and pads it with the specified character (`'#'`) to the right."
          },
          {
            id: 27,
            question: "What will be the output of the following code?\n\n    a=\"123abc\"\n    print(a.replace('w','1'))",
            options: [
              "123abc",
              "1231bc",
              "Error",
              "None"
            ],
            answer: "123abc",
            explanation: "Since the character `'w'` does not exist in the string, `replace()` returns the original string unchanged."
          }
        ]
      }
  ];
export default pythonQuestions;  