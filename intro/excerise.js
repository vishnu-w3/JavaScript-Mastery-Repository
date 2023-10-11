var coursename = 'web development'
var price = 2000
var goals = ['build knowledge', 'regular learning', 'believe and hope']

alert(coursename)
alert(price)
alert(goals)

let course = {
    name: 'web development',
    price: '2000',
    goals: ['build knowledge', 'regular learning', 'believe and hope']
}

alert(course.name)
alert(course.price)
alert(course.goals)

function getlist(array,arrayindex) {
    let arrayelement =array[arrayindex];
    return arrayelement;
}

let firstgoal = getlist(course.goals,0)
alert(firstgoal)

// 3) Try "grouping" the three variables together and still output their values thereafter
// 4) Also output the second element in your "main goals" variable
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("alert") the result