# dataset data tools
# Ray Higgins

class Dataset 

	
	def initialize(filename, headers)
		@headers = []
		@rows = []
		#@headers? = headers?
		@file = File.open(filename, "r")

		puts "Hello!"
			@headers = @file.gets.split(",")
		
		i = 0
		entry = {}
		while (line = @file.gets)
			arr = line.split(",")
			arr.each do |x|
				entry.merge!(@header[i] => x)
				i = (i+1)
			end
			@rows.push(entry)
			i = 0
			entry.clear
		end

	end
	
	def minMax()
		#finds min or max of column 
	end

	def column(header)
		count = 0
		column = {}
		@rows.each do |x|
			if x[header]
				column.merge!(count, x[header])
				count = count + 1
			end
		end
		
		column
	end



end