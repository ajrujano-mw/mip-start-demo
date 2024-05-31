# TicTech Formulation
In this section we formulate a very simple problem, called *TicTech*,
to illustrate the basic steps in writing a mathematical formulation.

## Statement
Mr. Mip has been contacted by *TicTech*, an organization that is now going 
through a digital transformation and needs to make an important decision. 
They need to decide on the right type of technology that will support them 
making complex decisions as their business grow.

After reading a [blog][purpose-built-apps] about technologies for
decision-making, Mr. Mip arrived at three options:
1. Consulting services
2. Off-the-shelf software
3. Purpose-built web applications (Apps)

By analyzing pos and cons of each technology in the context of TicTech, Mr. 
Mip derived in collaboration with the client a score to each technology as 
follows: 

| **Technology ID** | **Technology** | **Score** |
|:-----------------:|:---------------|:---------:|
|         1         | Consulting     |    12     |
|         2         | Software       |    17     |
|         3         | Apps           |    25     |


What technology should be selected?

Assuming that Mr. Mip can only recommend one technology and the goal is to maximize the score, it’s obvious that TicTech should choose apps. 

Now, let’s see how to model this problem using mathematical formulation.

## Formulation

A formulation is nothing but a very precise representation of the business problem in mathematical terms.

It typically has three main components:
1.	Decision variables
2.	Constraints
3.	Objective function

### Decision Variables
While there might be multiples ways to define the decision variables, choosing a good set of variables is crucial. Because, once the variables are defined, constraints and the objective are defined as functions of it.

For this problem, Mr. Mip defined three binary variables:

- $x_1$	- Equals $1$ if consulting is chosen, $0$ otherwise.
- $x_2$	- Equals $1$ if off-the-shelf software is chosen, $0$ otherwise.
- $x_3$	- Equals $1$ if purpose-built apps are chosen, $0$ otherwise.

### Constraints
In this example, there is only one requirement: one, and only one, technology must be chosen.
Mr. Mip formulated this requirement using a single constraint.

* Exactly one technology:
$$x_1+x_2+x_3=1.$$

Take a moment to think why this equation does the work. Remember that each variable can only take the values $0$ or $1$ and analyse all the possible combinations.

Can you think of an alternative way to formulate this? There is a hint$^{**}$ at the end of this document if you need.

### Objective
The objective of this problem is to maximize the score, which Mr. Mip formulated as following.

$$\max{12x_1 + 17x_2 + 25x_3}.$$

Take another moment to think why this objective function does the work.

### Final Formulation
Putting all together, Mr. Mip arrived at the following formulation.
$$
\begin{align*}
\max & \quad 12x_1+17x_2+25x_3\\
\text{s.t.} & \quad x_1+x_2+x_3 =1\\
&x_1, x_2, x_3 \in \{0, 1\}.
\end{align*}
$$

🗒️ **Note:** 
*The "s.t." is an abbreviation for "subject to", meaning that we are minimizing the given objective subject to the constraint(s) that follow.* 

## Challenge Yourself
Convince yourself that the following are also correct formulations for the TicTech problem.

- Formulation 1:
    $$
    \begin{align*}
    \max & \quad 12x_1+17x_2+25x_3\\
    \text{s.t.} & \quad x_1+x_2+x_3 \leq 1\\
    &x_1, x_2, x_3 \in \{0, 1\}.
    \end{align*}
    $$
- Formulation 2:
    $$
    \begin{align*}
    \max & \quad 12x_1+17x_2+25x_3\\
    \text{s.t.} & \quad x_1+x_2 \leq 1\\
    & x_1+x_3 \leq 1\\
    & x_2+x_3 \leq 1\\
    &x_1, x_2, x_3 \in \{0, 1\}.
    \end{align*}
    $$

## Takeaways
1.	There are three major steps in solving problems using MIP:
    1.	Understanding the problem.
    2.	Writing a mathematical formulation.
    3.	Implementing and solving the optimization model.
2.	A typical formulation has three main components:
    1.	Decision variables
    2.	Constraints
    3.	Objective function
3.	There may be multiple ways to formulate and solve the same problem.

------------------------------------------------------------------------------
** How about using three constraints, involving two variables each?

[purpose-built-apps]: https://medium.com/opex-analytics/purpose-built-apps-for-enterprise-decision-making-31ccadad362d

------------------------------------------------------------------------------

Next, we will talk about the different classes of mathematical optimization.