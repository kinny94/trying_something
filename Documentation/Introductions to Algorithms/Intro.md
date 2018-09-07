# Introduction to Algorithms

**Algorithms** :-  An Algorithms is any well-defined computational procedure that takes some value, or set of values, as input and produces some value, or set of values, as output.

**Which Sorting algorithm to use?**:- Sorting is a fundamental operation in computer science. As a result, we have a large number of sorting algorithms at our disposal. Which algorithm is best for a given problem depends on among other factors like:
1. Number of items to be sorted.
2. The extent to which the items are already sorted or somewhat sorted.
3. Possible restrictions on the item values.
4. The architecture of the computer, and the kind of storage devices to be used: main memory, disks or even tapes.

**Data Structure** :- A data structure is a way to store and orgranize data in order to facilitate access and modifications. No Single data structure works well for all purposes, and so it is important to know the strength and limitations of several of them.

**Problems** :- There is an interesting subset of problems called NP-complete. Why are these problems interesting? 
1. Although no efficient algorithm for an NP-complete problem has ever been found, nobody has ever proven that an efficient algorithm for one cannot exist. In other words, no one knows whether or not efficient algorithms exist for NP-complete problems.
2. The set of NP-Complete problems has the remarkable property that if an efficient algorithm exists for any one of them, then efficient algorithm exists for all of them. This relationship among NO problems makes the lack of efficient solutions all the more tantalizing.
3. Several NP-complete problems are similar, but not identical, to problems for which we do know of efficient algorithms.

*As a concrete example, consider a delivery company with a central depot. Each day, it loads up each delivery truck at the depot and sends it around to deliver goods to several addresses. At the end of the day, each truck must end up back at the depot so that it is ready to be loaded for the next day. To reduce costs, the company wants to select an order of delivery stops that yields the lowest overall distance traveled by each truck. This problem is the well-known “traveling-salesman problem,” and it is NP-complete. It has no known efficient algorithm. Under certain assumptions, however, we know of efficient algorithms that give an overall distance which is not too far above the smallest possible*