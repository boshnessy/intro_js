# # Write a method that prints out every number from 1 to 100. 

# def print
#   i = 1
#   100.times do
#     p i
#     i+=1
#   end
# end

# print

# # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

# def print_every_other
#   i = 1
#   50.times do
#     p i # if i % 2 == 1 (odd numbers)
#     i+=2
#   end
# end

# print_every_other

# # Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

# def count(array)
#   sum = 0
#   array.each do |number|
#     if number == 55
#       sum += 1
#     end
#   end
#   sum
# end

# p count([3, 55, 2, 55, 643, 55])

# # Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
# # For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

# # def awesomesaucify(input_array)
# #   new_array = []
# #   input_array.each do |string, index|
# #     new_array << string
# #     if index < 4
# #       new_array << "awesomesauce"
# #     end
# #   end
# #   new_array
# # end

# # p awesomesaucify(["a", "b", "c", "d", "e"])


# # Start with the hash: item_amounts = {chair: 5, table: 2}
# # Someone just bought two chairs. Change the hash such that the chair amount is 3.
# # The final result should be: {chair: 3, table: 2}

# item_amounts = {chair: 5, table: 2}
# item_amounts[:chair] = 3
# p item_amounts

# # Start with the hash: item_amounts = {chair: 5, table: 2}
# # You received 7 desks to sell. Change the hash to include desks.
# # The final result should be: {chair: 5, table: 2, desk: 7}

# item_amounts = {chair: 5, table: 2}
# item_amounts[:desk] = 7
# p item_amounts

# # Write a method that accepts a number and returns its factorial.
# # For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

# def factorial(number)
#   decreasing_number = number
#   total = 1
#   number.times do
#     total = total * decreasing_number
#     decreasing_number -= 1
#   end
#   return total
# end

# p factorial(5)

# # Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
# # For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

# def sum_combinations(first_array, second_array)
#   new_array = []
#   first_array.each do |first_number|
#     second_array.each do |second_number|
#       new_array << first_number + second_number
#     end
#   end
#   new_array
# end

# p sum_combinations([1, 5, 10], [100, 500, 1000])

# Equality check
# x = 10
# if x == "10"
#   puts "equal"
# else
#   puts "not equal"
# end

# # Falsey values
# x = 3
# if nil
#   x = x + 1
# end
# if false
#   x = x + 1
# end
# if 0
#   x = x + 1
# end
# if ""
#   x = x + 1
# end
# p x

# Functions
# def print_lyrics
#   puts "Now this is a story all about how"
#   puts "My life got flipped turned upside down"
#   puts "And I'd like to take a minute, just sit right there"
#   puts "I'll tell you how I became the prince of a town called Bel-Air"
# end

# print_lyrics

# # Scope
# x = 100
# def add_one(num)
#   x = 1
#   return num + x
# end
# puts x           #=> 100
# puts add_one(5)  #=> 6
# puts x           #=> 100

# # JavaScript objects vs. Ruby classes
# class Boat
#   attr_reader :name, :color
#   attr_writer :color

#   def initialize(name, color, price)
#     @name = name
#     @color = color
#     @price = price
#   end

#   def color=(new_color)
#     @color = new_color
#   end
# end

# boat = Boat.new("S. S. Minnow", "white", 20000 )
# p boat
# p boat.name
# boat.color = "red"
# p boat.color

# Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is [“a”, “b”, “c”, “d”, “e”, “f”], the output should be [“a”, “c”, “e”].

# def select_even_items(strings)
#   result = []
#   index = 0
#   strings.each do |string|
#     if index % 2 == 0
#       result << string
#     end
#     index = index + 1
#   end
#   result
# end
# p select_even_items(["a”, "b", "c", "d", "e", "f"])

# Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

# def max(numbers)
#   current_max = numbers[0]
#   numbers.each do |number|
#     if number > current_max
#       current_max = number
#     end
#   end
#   current_max
# end
# p max([5, 4, 8, 1, 2])

# Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

# def factorial(number)
#   result = 1
#   current_number = number
#   number.times do
#     result = result * current_number
#     current_number = current_number - 1
#   end
#   result
# end
# p factorial(5)

# Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built in to Ruby.

# def descending(numbers)
#   result = []
#   index = numbers.length - 1
#   numbers.length.times do
#     result << numbers[index]
#     index = index - 1
#   end
#   result
# end
# p descending([1, 3, 5, 7])

# Write a method that accepts two arrays of numbers, and returns an array of every sum of every combination of single numbers from first and second array. For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should return this array: [101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

# def sum_combinations(numbers1, numbers2)
#   result = []
#   numbers1.each do |number1|
#     numbers2.each do |number2|
#       result << number1 + number2
#     end
#   end
#   result
# end
# p sum_combinations([1, 5, 10], [100, 500, 1000])