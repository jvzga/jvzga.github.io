# Encryption Activity Reflection


## Part 1: Key Exchange

My Key: 5
My Partner's Key: 5

Our initial shared key: 11

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

|       Encoded Message     |      Decoded Message      | Key |
| ------------------------- | ------------------------- | --- |
| st estd td 1 xpddlrp      | hi this is 1 message      | 11 |
| wg hvwg o 2br asggous?    | is this a 2nd message?    | 14 |
| allefzhbv 3 fp ebob       | doohickey 3 is here       | 23 |
| ayl g ecr y 4rf bmmfgaicw | can i get a 4th doohickey | 24 |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here:
aO8Jn

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: Joshua
    Destination: Christain  
    Sequence: 1/3
    Data: [01100001] [00110000]
    =========
    Packet 2:

    Source: Joshua
    Destination: Christain
    Sequence: 2/3 
    Data: [00111000] [01101010]
    =========
    Packet 3:

    Source: Joshua
    Destination: Christain
    Sequence: 3/3
    Data: [01101110] [01110010]
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation?
Symmetric uses a single shared key for 2 users making encryption and decryption fast but can compromise the entire system
Asymmetric uses keys that are constantly shifting making decryption difficult for non-intended users but the work can be tedious and slower but more secure

- Why is it important that this protocol uses a new key for each message?
It makes it so that each message is uniquely scrambled so no same message uses the same key, good for security

- Why is it important that you never share your secret key?
If it is shared, other people can use the key to decipher the messages

- In the transport layer, do these messages use TCP or UDP? Why?
TCP, because the data has to be whole to prevent any issues in deciphering

- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer.
In the internet layer, the data gets wrapped and divided equally with destination and ip headers so that the device can understand where,when,and how its going. Then in the link the packets are placed into frames and error checking bits to verify the integrity when it is recived by the recipent then it hops through routers and switches until it gets to its destination, if theres any issue the recipent will request retransmission of the data.

- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other
information can they still see?
They can see who/were it came from and where/whom it is going to, its possible they can see the timestamps as well