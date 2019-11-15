- [x] What is the purpose of using _sessions_?

Sessions are commonly used to allow a server to store information about a client. That information can then be used for a variety of purposes.

- [x] What does bcrypt do to help us store passwords in a secure manner.
- [x] What does bcrypt do to slow down attackers?

BCrypt is based on the Blowfish block cipher cryptomatic algorithm and takes the form of an adaptive hash function. But why should you use it to protect your data and resources? To explain, we’re going to need to get a little technical…
Using a Key Factor, BCrypt is able to adjust the cost of hashing. With Key Factor changes, the hash output can be influenced. In this way, BCrypt remains extremely resistant to hacks, especially a type of password cracking called rainbow table.
This Key Factor will continue to be a key feature as computers become more powerful in the future. Why? Well, because it compensates for these powerful computers and slows down hashing speed significantly. Ultimately slowing down the cracking process until it’s no longer a viable strategy.
If you have sensitive data or information that you need to be protected, ensuring it is secured correctly is vital. As we have seen, there are many ways to secure this information through various password methods, but only BCrypt offers a truly robust solution.



- [x] What are the three parts of the JSON Web Token?

A JWT is a string that has three parts separated by a period (.). Those are:

The header.
The payload.
The signature.