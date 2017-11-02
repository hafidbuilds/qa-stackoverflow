# qa-stackoverflow

## API DESIGN

Question: 
..* Create => (POST Questions ID)        /question/:id
..* Read 	=> (GET All Questions)       /question

###Answer:	  
..* Create => (POST Answers)  	         /question/:id/answer
..* Read   => (GET All Answers)          /question
..* Update => (PUT specific Answers)     /question/:id/answer/:id
..* Delete => (DELETE specific Answers)  /question/:id/answer/:id
..* VoteUp => (POST Vote) 			  	 /question/:id/answer/:id/voteup
..* VoteUp => (POST Vote) 			  	 /question/:id/answer/:id/votedown

