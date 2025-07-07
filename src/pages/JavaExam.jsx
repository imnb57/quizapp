// Place this in src/JavaExam.js


import React, { useState, useEffect } from "react";

function ExamTimer({ duration = 3600 }) {
  const [secondsLeft, setSecondsLeft] = useState(duration);

  useEffect(() => {
    setSecondsLeft(duration); // Reset timer if duration changes
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev > 0) return prev - 1;
        clearInterval(interval);
        return 0;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [duration]);

  const formatTime = (secs) => {
    const h = String(Math.floor(secs / 3600)).padStart(2, "0");
    const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
    const s = String(secs % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="flex justify-center items-center mb-6">
      <span className="text-lg font-mono bg-gray-200 px-4 py-2 rounded shadow">
        Time Remaining: {formatTime(secondsLeft)}
      </span>
    </div>
  );
}
export const questionData = {
  paper1: {
    SectionA: {
      instructions: "Multiple Choice Questions (1 mark each). Answer all questions.",
      questions: [
        {
          question: "Which of the following keywords is used to define a subclass in Java?",
          options: ["derives", "inherits", "extends", "subclass"],
          answer: "extends",
        },
        {
          question: "What is the output of the following?\nint x = 3;\nx *= 2 + 5;\nSystem.out.println(x);",
          options: ["21", "16", "10", "11"],
          answer: "21",
        },
        {
          question: "What does the term \"object\" refer to in object-oriented programming?",
          options: ["A primitive data type", "A method", "An instance of a class", "A return type"],
          answer: "An instance of a class",
        },
        {
          question: "Which operator is used to compare two values for equality?",
          options: ["=", "==", "!=", "equals()"],
          answer: "==",
        },
        {
          question: "What does the break statement do in Java loops?",
          options: ["Skips the next iteration", "Exits the current method", "Exits the loop entirely", "Continues to the next loop"],
          answer: "Exits the loop entirely",
        },
        {
          question: "Which of the following is a valid method signature in Java?",
          options: ["void method(int x)", "int method x()", "void method = int()", "method void(int x)"],
          answer: "void method(int x)",
        },
        {
          question: "What is printed by the following?\nint[] arr = {2, 4, 6};\nSystem.out.println(arr.length);",
          options: ["2", "3", "6", "Error"],
          answer: "3",
        },
        {
          question: "Which of the following correctly defines an interface in Java?",
          options: ["class InterfaceName {}", "interface InterfaceName {}", "public class InterfaceName()", "abstract InterfaceName {}"],
          answer: "interface InterfaceName {}",
        },
        {
          question: "In Java, how is memory allocated for an object?",
          options: ["Stack memory", "Heap memory", "Static memory", "Constant pool"],
          answer: "Heap memory",
        },
        {
          question: "Which concept allows code reuse in OOP?",
          options: ["Abstraction", "Encapsulation", "Inheritance", "Association"],
          answer: "Inheritance",
        },
        {
          question: "What does the return keyword do in a method?",
          options: ["Terminates program execution", "Exits the method and optionally returns a value", "Calls another method", "Initializes variables"],
          answer: "Exits the method and optionally returns a value",
        },
        {
          question: "What is the result of this expression?\nSystem.out.println(\"Java\" + 10 + 5);",
          options: ["Java105", "Java15", "15Java", "Error"],
          answer: "Java105",
        },
      ],
    },
    SectionB: {
      instructions: "Short Answer Questions",
      questions: [
        {
          question: "Define encapsulation. How is it implemented in Java? Provide an example using getter and setter methods.",
        },
        {
          question: "Explain the concept of constructor chaining in Java. Demonstrate it using the this() keyword with code.",
        },
      ],
    },
    SectionC: {
      instructions: "Short Notes (Answer any 4, 2 marks each)",
      topics: [
        "Object class in Java",
        "Keywords break vs continue",
        "Role of access modifiers",
        "Use of instanceof operator",
        "Difference between class and interface",
      ],
    },
    SectionD: {
      instructions: "Programming Questions (Answer any 2, 10 marks each)",
      questions: [
        {
          question: "Develop a Java program that demonstrates multi-level inheritance:\n- Create a base class Animal with method makeSound().\n- Create a subclass Mammal and another subclass Dog that overrides the method.\n- In the main method, show how overriding works.",
        },
        {
          question: "Write a Java program for a basic course registration system:\n- Define a class Course with courseId, courseName, and instructor.\n- Allow registering multiple courses using an ArrayList.\n- Display all registered courses in a formatted output.",
        },
        {
          question: "Create a program that demonstrates the use of static variables and methods:\n- Define a class Counter that tracks how many objects have been created.\n- Use a static variable and a static method to display the total count.\n- Test it by creating multiple objects in the main method.",
        },
      ],
    },
  },
  paper2: {
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
          question: "Write a Java program to demonstrate the use of abstract classes:\n- Create an abstract class Shape with an abstract method area().\n- Create two subclasses: Circle and Rectangle, each implementing area().\n- Show usage in the main method.",
        },
        {
          question: "Design a Java class Employee with attributes id, name, and salary:\n- Implement methods to update salary and display employee details.\n- Create multiple Employee objects and demonstrate updating and displaying their information.",
        },
        {
          question: "Implement a Java program to demonstrate exception handling:\n- Create a method that divides two numbers and handles possible exceptions.\n- Show how to use try-catch-finally blocks in the main method.",
        },
      ],
    },
  },
   paper3: {
    SectionA: {
      instructions: "Multiple Choice Questions (1 mark each). Answer all questions.",
      questions: [
        {
          question: "What is the default value of a boolean variable in Java?",
          options: ["true", "false", "null", "0"],
          answer: "false",
        },
        {
          question: "Which of the following is not a Java keyword?",
          options: ["static", "Boolean", "void", "private"],
          answer: "Boolean",
        },
        {
          question: "What is the size of a long data type in Java?",
          options: ["4 bytes", "8 bytes", "2 bytes", "Depends on JVM"],
          answer: "8 bytes",
        },
        {
          question: "Which of these is used to handle exceptions in Java?",
          options: ["try-catch", "if-else", "switch", "for loop"],
          answer: "try-catch",
        },
        {
          question: "Which method is called when an object is created?",
          options: ["main()", "constructor", "finalize()", "static block"],
          answer: "constructor",
        },
        {
          question: "What is the output of the expression: System.out.println(10 + 20 + \"30\");",
          options: ["3030", "102030", "30", "3030"],
          answer: "3030",
        },
        {
          question: "Which of the following is a checked exception?",
          options: ["NullPointerException", "IOException", "ArithmeticException", "ArrayIndexOutOfBoundsException"],
          answer: "IOException",
        },
        {
          question: "What is the purpose of the 'final' keyword in Java?",
          options: ["To declare constants", "To prevent method overriding", "To prevent inheritance", "All of the above"],
          answer: "All of the above",
        },
        {
          question: "Which collection class maintains insertion order?",
          options: ["HashSet", "TreeSet", "LinkedHashSet", "PriorityQueue"],
          answer: "LinkedHashSet",
        },
        {
          question: "What is the output of: System.out.println(5 + 5 + \"5\");",
          options: ["105", "55", "10", "15"],
          answer: "105",
        },
        {
          question: "Which of the following is not a primitive data type in Java?",
          options: ["int", "float", "String", "char"],
          answer: "String",
        },
        {
          question: "What is the use of the 'super' keyword?",
          options: [
            "Access parent class methods",
            "Call constructor",
            "Access parent class variables",
            "All of the above"
          ],
          answer: "All of the above",
        },
      ],
    },
    SectionB: {
      instructions: "Short Answer Questions",
      questions: [
        {
          question: "Explain the difference between an abstract class and an interface in Java.",
        },
        {
          question: "Describe how garbage collection works in Java.",
        },
      ],
    },
    SectionC: {
      instructions: "Short Notes (Answer any 4, 2 marks each)",
      topics: [
        "Java Memory Model",
        "Difference between Array and ArrayList",
        "Java Exception Hierarchy",
        "Static vs Instance Methods",
        "Java Access Modifiers",
      ],
    },
    SectionD: {
      instructions: "Programming Questions (Answer any 2, 10 marks each)",
      questions: [
        {
          question: "Write a Java program to implement a simple calculator using switch-case.",
        },
        {
          question: "Create a Java class Student with fields id, name, and grade. Write methods to set and get these fields.",
        },
        {
          question: "Write a Java program to demonstrate the use of interfaces with multiple inheritance.",
        },
      ],
    },
  },
  paper4: {
    SectionA: {
      instructions: "Multiple Choice Questions (1 mark each). Answer all questions.",
      questions: [
        {
          question: "Which of the following is not a valid Java identifier?",
          options: ["_myVar", "$myVar", "9myVar", "myVar9"],
          answer: "9myVar",
        },
        {
          question: "What is the size of a float data type in Java?",
          options: ["4 bytes", "8 bytes", "2 bytes", "Depends on JVM"],
          answer: "4 bytes",
        },
        {
          question: "Which keyword is used to create a thread in Java?",
          options: ["Thread", "Runnable", "start", "run"],
          answer: "Thread",
        },
        {
          question: "What is the output of the following code?\nint a = 10;\nint b = 20;\nSystem.out.println(a > b);",
          options: ["true", "false", "10", "20"],
          answer: "false",
        },
        {
          question: "Which of the following is used to handle runtime exceptions?",
          options: ["try-catch", "throws", "throw", "finally"],
          answer: "try-catch",
        },
        {
          question: "What is the default value of a static variable?",
          options: ["0", "null", "Depends on data type", "No default value"],
          answer: "0",
        },
        {
          question: "Which method is used to start a thread?",
          options: ["start()", "run()", "init()", "main()"],
          answer: "start()",
        },
        {
          question: "What is the output of: System.out.println(\"Hello\" + 1 + 2);",
          options: ["Hello3", "Hello12", "3Hello", "12Hello"],
          answer: "Hello12",
        },
        {
          question: "Which of the following is a marker interface?",
          options: ["Serializable", "Runnable", "Cloneable", "Comparable"],
          answer: "Serializable",
        },
        {
          question: "What is the purpose of the transient keyword?",
          options: [
            "To prevent serialization",
            "To make a variable static",
            "To make a method final",
            "To make a class abstract"
          ],
          answer: "To prevent serialization",
        },
        {
          question: "Which of the following is not a Java loop?",
          options: ["for", "while", "do-while", "foreach"],
          answer: "foreach",
        },
        {
          question: "What is the output of the following?\nSystem.out.println(5 + 10 + \"Java\");",
          options: ["15Java", "510Java", "Java15", "Java510"],
          answer: "15Java",
        },
      ],
    },
    SectionB: {
      instructions: "Short Answer Questions",
      questions: [
        {
          question: "Explain the difference between checked and unchecked exceptions in Java.",
        },
        {
          question: "Describe the use of the synchronized keyword with an example.",
        },
      ],
    },
    SectionC: {
      instructions: "Short Notes (Answer any 4, 2 marks each)",
      topics: [
        "Java Collections Framework",
        "Generics in Java",
        "Java Stream API",
        "Lambda Expressions",
        "Java Annotations",
      ],
    },
    SectionD: {
      instructions: "Programming Questions (Answer any 2, 10 marks each)",
      questions: [
        {
          question: "Write a Java program to implement a simple banking system with deposit and withdrawal methods.",
        },
        {
          question: "Create a Java class Car with attributes make, model, and year. Write methods to display car details.",
        },
        {
          question: "Write a Java program to demonstrate exception propagation.",
        },
      ],
    },
  },
  paper5: {
  SectionA: {
    instructions: "Multiple Choice Questions (1 mark each). Answer all questions.",
    questions: [
      {
        question: "Which of the following keywords is used to define a subclass in Java?",
        options: ["derives", "inherits", "extends", "subclass"],
        answer: "extends"
      },
      {
        question: "What is the output of the following?\nint x = 3;\nx *= 2 + 5;\nSystem.out.println(x);",
        options: ["21", "16", "10", "11"],
        answer: "21"
      },
      {
        question: "What does the term object refer to in object-oriented programming?",
        options: ["A primitive data type", "A method", "An instance of a class", "A return type"],
        answer: "An instance of a class"
      },
      {
        question: "Which operator is used to compare two values for equality?",
        options: ["=", "==", "!=", "equals()"],
        answer: "=="
      },
      {
        question: "What does the break statement do in Java loops?",
        options: ["Skips the next iteration", "Exits the current method", "Exits the loop entirely", "Continues to the next loop"],
        answer: "Exits the loop entirely"
      },
      {
        question: "Which of the following is a valid method signature in Java?",
        options: ["void method(int x)", "int method x()", "void method = int()", "method void(int x)"],
        answer: "void method(int x)"
      },
      {
        question: "What is printed by the following?\nint[] arr = {2, 4, 6};\nSystem.out.println(arr.length);",
        options: ["2", "3", "6", "Error"],
        answer: "3"
      },
      {
        question: "Which of the following correctly defines an interface in Java?",
        options: ["class InterfaceName {}", "interface InterfaceName {}", "public class InterfaceName()", "abstract InterfaceName {}"],
        answer: "interface InterfaceName {}"
      },
      {
        question: "In Java, how is memory allocated for an object?",
        options: ["Stack memory", "Heap memory", "Static memory", "Constant pool"],
        answer: "Heap memory"
      },
      {
        question: "Which concept allows code reuse in OOP?",
        options: ["Abstraction", "Encapsulation", "Inheritance", "Association"],
        answer: "Inheritance"
      },
      {
        question: "What does the return keyword do in a method?",
        options: ["Terminates program execution", "Exits the method and optionally returns a value", "Calls another method", "Initializes variables"],
        answer: "Exits the method and optionally returns a value"
      },
      {
        question: "What is the result of this expression?\nSystem.out.println(\"Java\" + 10 + 5);",
        options: ["Java105", "Java15", "15Java", "Error"],
        answer: "Java105"
      }
    ]
  },
  SectionB: {
    instructions: "Short Answer Questions",
    questions: [
      {
        question: "Define encapsulation. How is it implemented in Java? Provide an example using getter and setter methods."
      },
      {
        question: "Explain the concept of constructor chaining in Java. Demonstrate it using the this() keyword with code."
      }
    ]
  },
  SectionC: {
    instructions: "Short Notes (Answer any 4, 2 marks each)",
    topics: [
      "Object class in Java",
      "Keywords break vs continue",
      "Role of access modifiers",
      "Use of instanceof operator",
      "Difference between class and interface"
    ]
  },
  SectionD: {
    instructions: "Programming Questions (Answer any 2, 10 marks each)",
    questions: [
      {
        question: "Develop a Java program that demonstrates multi-level inheritance:\n- Create a base class Animal with method makeSound().\n- Create a subclass Mammal and another subclass Dog that overrides the method.\n- In the main method, show how overriding works."
      },
      {
        question: "Write a Java program for a basic course registration system:\n- Define a class Course with courseId, courseName, and instructor.\n- Allow registering multiple courses using an ArrayList.\n- Display all registered courses in a formatted output."
      },
      {
        question: "Create a program that demonstrates the use of static variables and methods:\n- Define a class Counter that tracks how many objects have been created.\n- Use a static variable and a static method to display the total count.\n- Test it by creating multiple objects in the main method."
      }
    ]
  }
}

};


// Section A: MCQ
const MCQSection = ({ questions, instructions }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  useEffect(() => {
    setAnswers(Array(questions.length).fill(""));
    setSubmitted(false);
    setScore(null);
  }, [questions]);

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.answer) {
        correctCount += 1;
      }
    });
    setScore(correctCount);
    setSubmitted(true);
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl font-bold mb-2">Section A: Multiple Choice Questions</h2>
      <p className="text-gray-600 mb-4">{instructions}</p>
      {questions.map((q, idx) => (
        <div key={q.id || idx} className="mb-5">
          <p className="font-medium mb-2">
            Q{idx + 1}.{" "}
            {q.question.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>
          {q.options.map((opt, oIdx) => (
            <label key={oIdx} className="block pl-4 mb-1">
              <input
                type="radio"
                className="mr-2"
                name={`mcq-${idx}`}
                value={opt}
                disabled={submitted}
                checked={answers[idx] === opt}
                onChange={() => {
                  if (!submitted) {
                    const newAns = [...answers];
                    newAns[idx] = opt;
                    setAnswers(newAns);
                  }
                }}
              />
              {opt}
              {/* Show feedback after submission */}
              {submitted && opt === q.answer && (
                <span className="text-green-600 font-bold ml-2">&#10003;</span>
              )}
              {submitted && answers[idx] === opt && answers[idx] !== q.answer && (
                <span className="text-red-600 font-bold ml-2">&#10007;</span>
              )}
            </label>
          ))}
        </div>
      ))}
      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Answers
        </button>
      ) : (
        <div className="mt-4 font-semibold">
          You scored {score} out of {questions.length}.
        </div>
      )}
    </section>
  );
};

// Section B: Short Answer
const ShortAnswerSection = ({ questions, instructions }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  React.useEffect(() => {
    setAnswers(Array(questions.length).fill(""));
  }, [questions]);

  return (
    <section className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl font-bold mb-2">Section B: Short Answer Questions</h2>
      <p className="text-gray-600 mb-4">{instructions}</p>
      {questions.map((q, idx) => (
        <div key={q.id || idx} className="mb-5">
          <p className="font-medium mb-2">
            Q{idx + 1}. {q.question}
          </p>
          <textarea
            rows={4}
            value={answers[idx] || ""}
            onChange={(e) => {
              const newAns = [...answers];
              newAns[idx] = e.target.value;
              setAnswers(newAns);
            }}
            placeholder="Type your answer here..."
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
      ))}
    </section>
  );
};

// Section C: Short Notes
const ShortNotesSection = ({ topics, instructions }) => {
  const [answers, setAnswers] = useState(Array(topics.length).fill(""));

  React.useEffect(() => {
    setAnswers(Array(topics.length).fill(""));
  }, [topics]);

  return (
    <section className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl font-bold mb-2">Section C: Short Notes</h2>
      <p className="text-gray-600 mb-4">{instructions}</p>
      {topics.map((topic, idx) => (
        <div key={topic.id || idx} className="mb-5">
          <p className="font-medium mb-2">
            {String.fromCharCode(97 + idx)}) {topic}
          </p>
          <textarea
            rows={3}
            value={answers[idx] || ""}
            onChange={(e) => {
              const newAns = [...answers];
              newAns[idx] = e.target.value;
              setAnswers(newAns);
            }}
            placeholder="Write a short note..."
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
      ))}
    </section>
  );
};

// Section D: Programming
const ProgrammingSection = ({ questions, instructions }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  React.useEffect(() => {
    setAnswers(Array(questions.length).fill(""));
  }, [questions]);

  return (
    <section className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl font-bold mb-2">Section D: Programming Questions</h2>
      <p className="text-gray-600 mb-4">{instructions}</p>
      {questions.map((q, idx) => (
        <div key={q.id || idx} className="mb-5">
          <p className="font-medium mb-2">
            Q{idx + 1}.{" "}
            {q.question.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <textarea
            rows={6}
            value={answers[idx] || ""}
            onChange={(e) => {
              const newAns = [...answers];
              newAns[idx] = e.target.value;
              setAnswers(newAns);
            }}
            placeholder="Write your program or answer here..."
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
      ))}
    </section>
  );
};

export default function JavaExam() {
  const [selectedPaper, setSelectedPaper] = useState("paper1");
  const paperKeys = Object.keys(questionData);
  const currentPaperData = questionData[selectedPaper];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        📝 Java Exam Paper
      </h1>
      <ExamTimer duration={3600} />
      {/* Paper Selection Dropdown */}
      <div className="mb-8 text-center">
        <label htmlFor="paper-select" className="mr-2 font-medium">
          Select Paper:
        </label>
        <select
          id="paper-select"
          value={selectedPaper}
          onChange={(e) => setSelectedPaper(e.target.value)}
          className="border border-gray-300 rounded p-2"
        >
          {paperKeys.map((paperKey) => (
            <option key={paperKey} value={paperKey}>
              {paperKey.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      {/* Render sections for the selected paper */}
      <MCQSection
        questions={currentPaperData.SectionA.questions}
        instructions={currentPaperData.SectionA.instructions}
      />
      <ShortAnswerSection
        questions={currentPaperData.SectionB.questions}
        instructions={currentPaperData.SectionB.instructions}
      />
      <ShortNotesSection
        topics={currentPaperData.SectionC.topics}
        instructions={currentPaperData.SectionC.instructions}
      />
      <ProgrammingSection
        questions={currentPaperData.SectionD.questions}
        instructions={currentPaperData.SectionD.instructions}
      />
    </div>
  );
}
