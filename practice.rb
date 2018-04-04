# Write a method that prints out every number from 1 to 100. 

def print
  i = 1
  100.times do
    p i
    i+=1
  end
end

print

# Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

def print_every_other
  i = 1
  50.times do
    p i # if i % 2 == 1 (odd numbers)
    i+=2
  end
end

print_every_other

# Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

def count(array)
  sum = 0
  array.each do |number|
    if number == 55
      sum += 1
    end
  end
  sum
end

p count([3, 55, 2, 55, 643, 55])

# Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
# For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

# def awesomesaucify(input_array)
#   new_array = []
#   input_array.each do |string, index|
#     new_array << string
#     if index < 4
#       new_array << "awesomesauce"
#     end
#   end
#   new_array
# end

# p awesomesaucify(["a", "b", "c", "d", "e"])


# Start with the hash: item_amounts = {chair: 5, table: 2}
# Someone just bought two chairs. Change the hash such that the chair amount is 3.
# The final result should be: {chair: 3, table: 2}

item_amounts = {chair: 5, table: 2}
item_amounts[:chair] = 3
p item_amounts

# Start with the hash: item_amounts = {chair: 5, table: 2}
# You received 7 desks to sell. Change the hash to include desks.
# The final result should be: {chair: 5, table: 2, desk: 7}

item_amounts = {chair: 5, table: 2}
item_amounts[:desk] = 7
p item_amounts

# Write a method that accepts a number and returns its factorial.
# For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

def factorial(number)
  decreasing_number = number
  total = 1
  number.times do
    total = total * decreasing_number
    decreasing_number -= 1
  end
  return total
end

p factorial(5)

# Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
# For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

def sum_combinations(first_array, second_array)
  new_array = []
  first_array.each do |first_number|
    second_array.each do |second_number|
      new_array << first_number + second_number
    end
  end
  new_array
end

p sum_combinations([1, 5, 10], [100, 500, 1000])