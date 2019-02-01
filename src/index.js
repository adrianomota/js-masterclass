const statement = 'create table author (id number, name string, age number, city string, state string, country string)'
const regExp = /create table ([a-z]+) \((.+)\)/
const parseStatement = statement.match(regExp)
const tableName = parseStatement[1]
const columnsName = parseStatement[2]
let columns = columnsName.split(', ')
console.log(tableName)
console.log(columnsName)
console.log(columns)