    <ra> Required argument,
    (oa) Optional argument
    
         add <num1> <num2> (num3…)
         adds the numbers given.

         sub <num1> <num2>
         subtracts num1 from num2.
         
         multi <num1> <num2> (num3…)
         multiplies the numbers given.

         divide <num1> <num2>
         divides num1 by num2.

         round <mum> <place>
         round mum to place(0 rounds to integer, 1 to the tens place, -1 to the tenths).

         power <num1> <num2>
         takes num1 to the power of num2.

         random <int/float> <min> <max>
         gives a random number between min(inclusive) and max(inclusive) that is either an integer or float.

         not <bool>
         The logical operation not.

         and <bool1> <bool2>
         The logical operation and.

         or <bool1> <bool2>
         The logical operation or.

         xor <bool1> <bool2>
         The logical operation xor.

         > <num1> <num2>
         Returns true if num1 is bigger than num 2. False if not.

         < <num1> <num2>
        Returns true if num1 is less than num 2. False if not.

         == <num1> <num2>
         Returns true if num1 is equal to num 2. False if not.

        >= <num1> <num2>
         Returns true if num1 is bigger than or equal to mum 2. False if not.

        <= <num1> <num2>
         Returns true if num1 is smaller than or equal to mum 2. False if not.

        biggest <num1> <num2> (num3…)
        returns the biggest number from the list of numbers provided.

        smallest <num1> <num2> (num3…)
        returns the smallest number from the list of numbers provided.

        print <bool/number/a command>
        if the thing you have provided isn't a command or a variable, it will just print that. If it is a variable it will print the meaning. If it is a command it will print the result.

        var <name> <value / command>
        This will create a variable with the first word being the name and if the second word is either a bool or a number, the value will be that. If it is a command, the value will be set to the result of the command.

       set <name> <value / command>
       same rules as var apply except this will instead change the given variable’s value.

       comment:
       allows you to leave a comment. There must be a space between the colon and your comment.

       goto <line>
       makes the line running loop skip to the given line.

       if <bool / command> <line>
       goes to the given line if the first argument is true.




Note 1: Currently the only error handling done is to detect unknown commands. So be careful 

Note 2: you must put a semicolon at the endof each line except the last one.
