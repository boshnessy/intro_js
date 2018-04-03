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
    p i
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
  p sum
end

count([3, 55, 2, 55, 643, 55])

# Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
# For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

def awesomesauce(array)

end

p awesomesauce(["a", "b", "c", "d", "e"])