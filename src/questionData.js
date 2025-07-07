const questionData = {
  SectionA: {
    instructions: "Multiple Choice Questions (1 mark each). Answer all questions.",
    questions: [
      {
        question: "Which of the following is not a valid access modifier in Java?",
        options: ["public", "private", "protected", "internal"],
        answer: "internal",
      },
      {
        question: "What is the size of a char data type in Java?",
        options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
        answer: "2 bytes",
      },
      {
        question: "Which method is used to compare two strings for equality in Java?",
        options: ["equals()", "compareTo()", "==", "compare()"],
        answer: "equals()",
      },
      {
        question: "Which of the following is used to create an object in Java?",
        options: ["new", "create", "object", "construct"],
        answer: "new",
      },
      {
        question: "Which keyword is used to prevent inheritance of a class?",
        options: ["static", "final", "private", "abstract"],
        answer: "final",
      },
      {
        question: "What will be the output of the following code?\nint x = 5;\nSystem.out.println(x++ + ++x);",
        options: ["11", "12", "10", "13"],
        answer: "12",
      },
      {
        question: "Which exception is thrown when a program attempts to divide by zero?",
        options: ["ArithmeticException", "NullPointerException", "ArrayIndexOutOfBoundsException", "NumberFormatException"],
        answer: "ArithmeticException",
      },
      {
        question: "Which of the following statements is correct about interfaces in Java?",
        options: [
          "An interface can have method implementations",
          "An interface can extend multiple interfaces",
          "An interface can have constructors",
          "An interface cannot have static methods",
        ],
        answer: "An interface can extend multiple interfaces",
      },
      {
        question: "Which of these is the correct way to declare a constant in Java?",
        options: [
          "const int MAX = 10;",
          "final int MAX = 10;",
          "int constant MAX = 10;",
          "static int MAX = 10;",
        ],
        answer: "final int MAX = 10;",
      },
      {
        question: 'What is the output of the following code?\nSystem.out.println("Hello" + 5 + 10);',
        options: ["Hello15", "Hello510", "15Hello", "510Hello"],
        answer: "Hello510",
      },
      {
        question: "Which of the following is not a feature of Java?",
        options: ["Platform independent", "Object-oriented", "Pointer support", "Robust"],
        answer: "Pointer support",
      },
      {
        question: "What is the default value of a local variable in Java?",
        options: ["0", "null", "Depends on data type", "No default value"],
        answer: "No default value",
      },
    ],
  },
  SectionB: {
    instructions: "Short Answer Questions",
    questions: [
      {
        question: "Explain the difference between method overloading and method overriding in Java. Provide an example for each.",
      },
      {
        question: "Describe the role of the `super` keyword in Java with a suitable code example.",
      },
    ],
  },
  SectionC: {
    instructions: "Short Notes (Answer any 4, 2 marks each)",
    topics: [
      "The `this` keyword",
      "Static block",
      "ArrayList vs. array",
      "Exception hierarchy",
      "Use of the `break` statement",
    ],
  },
  SectionD: {
    instructions: "Programming Questions (Answer any 2, 10 marks each)",
    questions: [
      {
        question:
          "Write a Java program to demonstrate the use of abstract classes:\n- Create an abstract class Shape with an abstract method area().\n- Create two subclasses: Circle and Rectangle, each implementing area().\n- Show usage in the main method.",
      },
      {
        question:
          "Design a Java class Employee with attributes id, name, and salary:\n- Implement methods to update salary and display employee details.\n- Create multiple Employee objects and demonstrate updating and displaying their information.",
      },
      {
        question:
          "Implement a Java program to demonstrate exception handling:\n- Create a method that divides two numbers and handles possible exceptions.\n- Show how to use try-catch-finally blocks in the main method.",
      },
    ],
  },
};
