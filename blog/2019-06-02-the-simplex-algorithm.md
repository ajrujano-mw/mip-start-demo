---
slug: the-simplex-algorithm
title: Derivation of the simplex algorithm
authors: aster
tags: [the simplex algorithm, linear programming]
---

Consider the following linear program (LP) in standard form:
$$
\begin{array}{rcl}
& \min & c^Tx\\
& \text{s.t.}& Ax = b\\
&& x \geq 0.
\end{array}
$$
where $A$ is a $m\times n$ matrix and $b,c$ and $x$ are vectors of appropriate length. Suppose that the rows of $A$ are linearly independent (which implies that $n\leq m$, i.e., the LP has more variables than constraints).
<!--truncate-->

We rewrite the LP above by decomposing the decision variables between *basic* and *non-basic* variables. Let $B$ and $N$ be the set of indices of the basic and non-basic variables, respectively, where $B$ has $m$ elements and $N$ has $n-m$ elements. Then we write $x$ as follows:
$$
x = 
\begin{bmatrix}
x_B\\
x_N
\end{bmatrix}
$$

Similarly we decompose $c$ and $A$ as follows:
$$
c = 
\begin{bmatrix}
c_B\\
c_N
\end{bmatrix}, \quad
A = 
\begin{bmatrix}
A_B & A_N
\end{bmatrix}
$$

Now we rewrite the problem as follows:
$$
\begin{array}{rcl}
& \min & c^T_B x_B + c^T_N x_N\\
& \text{s.t.}& A_B x_B + A_N x_N = b\\
&& x_B, x_N \geq 0.
\end{array}
$$

Since we have assumed that the rows of $A$ are linearly independent, we know that $A_B$ is an invertible matrix. Therefore, we can rewrite the constraints as follows:
$$
A_B x_B + A_N x_N = b\\
A_B x_B = b - A_N x_N\\
x_B = A_B^{-1}(b - A_N x_N)\\
x_B = A_B^{-1}b - A_B^{-1}A_N x_N.
$$

By using this expression for $x_B$, the objective function can be re-written as:
$$
\begin{align*}
c^T_B x_B + c^T_N x_N &= c^T_B (A_B^{-1}b - A_B^{-1}A_N x_N) + c^T_N x_N\\
&= c^T_B A_B^{-1}b - c^T_BA_B^{-1}A_N x_N + c^T_N x_N\\
&= c^T_B A_B^{-1}b - (c^T_BA_B^{-1}A_N + c^T_N) x_N\\
&= c^T_B A_B^{-1}b + (c^T_N - c^T_BA_B^{-1}A_N) x_N.
\end{align*}
$$

The problem now becomes:
$$
\begin{array}{rcl}
& \min & c^T_B A_B^{-1}b + (c^T_N - c^T_BA_B^{-1}A_N) x_N\\
& \text{s.t.}& x_B = A_B^{-1}b - A_B^{-1}A_N x_N\\
&& x_B, x_N \geq 0.
\end{array}
$$

$$
\begin{array}{rcl}
& \min & c^T_B A_B^{-1}b\\
& \text{s.t.}& x_B = A_B^{-1}b\\
&& x_B\geq 0.
\end{array}
$$

At any iteration of the simplex method, the non-basic variables are set to zero, i.e., $x_N=0$. As a result, the values of the basic variables are given by $x_B = A_B^{-1}b$. And the objective value is given by $c^T_B A_B^{-1}b$.

To perform a simplex iteration (which is called a pivoting), we attempt to increase one of the non-basic variables from zero. But which one should we choose?

To answer this question, we need to re-write the problem using summation notation:
$$
\begin{array}{rcl}
& \min & c^T_B A_B^{-1}b + \sum_{j\in N}(c_j - c^T_BA_B^{-1}A^j) x_j\\
& \text{s.t.}& x_B = A_B^{-1}b - \sum_{j\in N}A_B^{-1}A^j x_j\\
&& x_B \geq 0, x_j \geq 0, \forall j \in N.
\end{array}
$$

From here, it’s easy to see that it only makes sense to increase from zero a non-basic variable $x_j$ if its coefficient $c_j - c^T_BA_B^{-1}A^j$ is negative. This coefficient is called the *reduced cost* of $x_j$. In fact, if the reduced cost of $x_j$ is negative, then increasing $x_j$ will decrease the objective value, which is desirable since this is a minimization problem. On the other hand, if the reduced cost of every non-basic variable is non-negative, we conclude that the current solution is optimal.

Now that we have a way to decide which non-basic variable can be made a basic variable (i.e., pick one with negative reduced cost), suppose $x_1$ is non-basic and has negative reduced cost. From an optimization perspective, we want to increase $x_1$ as much as possible. What can stop us from increasing $x_1$ indefinitely?

The answer comes from the expression
$$
x_B = A_B^{-1}b - \sum_{j\in N}A_B^{-1}A^j x_j.
$$
Which is same as
$$
x_B = A_B^{-1}b - A_B^{-1}A^1 x_1
$$
since $x_j=0$ for all $j\in N$ such that $j\neq 1$.

Therefore, if the vector $A_B^{-1}A^1$ has any positive component, as we increase $x_1$ the corresponding basic variables on the right-hand-side will decrease, and eventually one of them will reach zero and become a non-basic variable! If we were to keep increasing $x_1$, then some basic variables would become negative, which is not allowed as all variables must be non-negative. This completes one iteration of the simplex method.