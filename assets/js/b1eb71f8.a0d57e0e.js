"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4683],{5526:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"welcome","metadata":{"permalink":"/mip-start-demo/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","tags":[{"label":"facebook","permalink":"/mip-start-demo/blog/tags/facebook"},{"label":"hello","permalink":"/mip-start-demo/blog/tags/hello"},{"label":"docusaurus","permalink":"/mip-start-demo/blog/tags/docusaurus"}],"readingTime":0.405,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"unlisted":false,"nextItem":{"title":"MDX Blog Post","permalink":"/mip-start-demo/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/mip-start-demo/blog/mdx-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","tags":[{"label":"docusaurus","permalink":"/mip-start-demo/blog/tags/docusaurus"}],"readingTime":0.175,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"]},"unlisted":false,"prevItem":{"title":"Welcome","permalink":"/mip-start-demo/blog/welcome"},"nextItem":{"title":"Derivation of the simplex algorithm","permalink":"/mip-start-demo/blog/the-simplex-algorithm"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::"},{"id":"the-simplex-algorithm","metadata":{"permalink":"/mip-start-demo/blog/the-simplex-algorithm","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-06-02-the-simplex-algorithm.md","source":"@site/blog/2019-06-02-the-simplex-algorithm.md","title":"Derivation of the simplex algorithm","description":"Consider the following linear program (LP) in standard form:","date":"2019-06-02T00:00:00.000Z","tags":[{"label":"the simplex algorithm","permalink":"/mip-start-demo/blog/tags/the-simplex-algorithm"},{"label":"linear programming","permalink":"/mip-start-demo/blog/tags/linear-programming"}],"readingTime":3.475,"hasTruncateMarker":true,"authors":[{"name":"Aster Santana","title":"CEO and founder of MipWise","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png","key":"aster"}],"frontMatter":{"slug":"the-simplex-algorithm","title":"Derivation of the simplex algorithm","authors":"aster","tags":["the simplex algorithm","linear programming"]},"unlisted":false,"prevItem":{"title":"MDX Blog Post","permalink":"/mip-start-demo/blog/mdx-blog-post"},"nextItem":{"title":"The diet problem","permalink":"/mip-start-demo/blog/the-diet-problem"}},"content":"Consider the following linear program (LP) in standard form:\\n$$\\n\\\\begin{array}{rcl}\\n& \\\\min & c^Tx\\\\\\\\\\n& \\\\text{s.t.}& Ax = b\\\\\\\\\\n&& x \\\\geq 0.\\n\\\\end{array}\\n$$\\nwhere $A$ is a $m\\\\times n$ matrix and $b,c$ and $x$ are vectors of appropriate length. Suppose that the rows of $A$ are linearly independent (which implies that $n\\\\leq m$, i.e., the LP has more variables than constraints).\\n\x3c!--truncate--\x3e\\n\\nWe rewrite the LP above by decomposing the decision variables between *basic* and *non-basic* variables. Let $B$ and $N$ be the set of indices of the basic and non-basic variables, respectively, where $B$ has $m$ elements and $N$ has $n-m$ elements. Then we write $x$ as follows:\\n$$\\nx = \\n\\\\begin{bmatrix}\\nx_B\\\\\\\\\\nx_N\\n\\\\end{bmatrix}\\n$$\\n\\nSimilarly we decompose $c$ and $A$ as follows:\\n$$\\nc = \\n\\\\begin{bmatrix}\\nc_B\\\\\\\\\\nc_N\\n\\\\end{bmatrix}, \\\\quad\\nA = \\n\\\\begin{bmatrix}\\nA_B & A_N\\n\\\\end{bmatrix}\\n$$\\n\\nNow we rewrite the problem as follows:\\n$$\\n\\\\begin{array}{rcl}\\n& \\\\min & c^T_B x_B + c^T_N x_N\\\\\\\\\\n& \\\\text{s.t.}& A_B x_B + A_N x_N = b\\\\\\\\\\n&& x_B, x_N \\\\geq 0.\\n\\\\end{array}\\n$$\\n\\nSince we have assumed that the rows of $A$ are linearly independent, we know that $A_B$ is an invertible matrix. Therefore, we can rewrite the constraints as follows:\\n$$\\nA_B x_B + A_N x_N = b\\\\\\\\\\nA_B x_B = b - A_N x_N\\\\\\\\\\nx_B = A_B^{-1}(b - A_N x_N)\\\\\\\\\\nx_B = A_B^{-1}b - A_B^{-1}A_N x_N.\\n$$\\n\\nBy using this expression for $x_B$, the objective function can be re-written as:\\n$$\\n\\\\begin{align*}\\nc^T_B x_B + c^T_N x_N &= c^T_B (A_B^{-1}b - A_B^{-1}A_N x_N) + c^T_N x_N\\\\\\\\\\n&= c^T_B A_B^{-1}b - c^T_BA_B^{-1}A_N x_N + c^T_N x_N\\\\\\\\\\n&= c^T_B A_B^{-1}b - (c^T_BA_B^{-1}A_N + c^T_N) x_N\\\\\\\\\\n&= c^T_B A_B^{-1}b + (c^T_N - c^T_BA_B^{-1}A_N) x_N.\\n\\\\end{align*}\\n$$\\n\\nThe problem now becomes:\\n$$\\n\\\\begin{array}{rcl}\\n& \\\\min & c^T_B A_B^{-1}b + (c^T_N - c^T_BA_B^{-1}A_N) x_N\\\\\\\\\\n& \\\\text{s.t.}& x_B = A_B^{-1}b - A_B^{-1}A_N x_N\\\\\\\\\\n&& x_B, x_N \\\\geq 0.\\n\\\\end{array}\\n$$\\n\\n$$\\n\\\\begin{array}{rcl}\\n& \\\\min & c^T_B A_B^{-1}b\\\\\\\\\\n& \\\\text{s.t.}& x_B = A_B^{-1}b\\\\\\\\\\n&& x_B\\\\geq 0.\\n\\\\end{array}\\n$$\\n\\nAt any iteration of the simplex method, the non-basic variables are set to zero, i.e., $x_N=0$. As a result, the values of the basic variables are given by $x_B = A_B^{-1}b$. And the objective value is given by $c^T_B A_B^{-1}b$.\\n\\nTo perform a simplex iteration (which is called a pivoting), we attempt to increase one of the non-basic variables from zero. But which one should we choose?\\n\\nTo answer this question, we need to re-write the problem using summation notation:\\n$$\\n\\\\begin{array}{rcl}\\n& \\\\min & c^T_B A_B^{-1}b + \\\\sum_{j\\\\in N}(c_j - c^T_BA_B^{-1}A^j) x_j\\\\\\\\\\n& \\\\text{s.t.}& x_B = A_B^{-1}b - \\\\sum_{j\\\\in N}A_B^{-1}A^j x_j\\\\\\\\\\n&& x_B \\\\geq 0, x_j \\\\geq 0, \\\\forall j \\\\in N.\\n\\\\end{array}\\n$$\\n\\nFrom here, it\u2019s easy to see that it only makes sense to increase from zero a non-basic variable $x_j$ if its coefficient $c_j - c^T_BA_B^{-1}A^j$ is negative. This coefficient is called the *reduced cost* of $x_j$. In fact, if the reduced cost of $x_j$ is negative, then increasing $x_j$ will decrease the objective value, which is desirable since this is a minimization problem. On the other hand, if the reduced cost of every non-basic variable is non-negative, we conclude that the current solution is optimal.\\n\\nNow that we have a way to decide which non-basic variable can be made a basic variable (i.e., pick one with negative reduced cost), suppose $x_1$ is non-basic and has negative reduced cost. From an optimization perspective, we want to increase $x_1$ as much as possible. What can stop us from increasing $x_1$ indefinitely?\\n\\nThe answer comes from the expression\\n$$\\nx_B = A_B^{-1}b - \\\\sum_{j\\\\in N}A_B^{-1}A^j x_j.\\n$$\\nWhich is same as\\n$$\\nx_B = A_B^{-1}b - A_B^{-1}A^1 x_1\\n$$\\nsince $x_j=0$ for all $j\\\\in N$ such that $j\\\\neq 1$.\\n\\nTherefore, if the vector $A_B^{-1}A^1$ has any positive component, as we increase $x_1$ the corresponding basic variables on the right-hand-side will decrease, and eventually one of them will reach zero and become a non-basic variable! If we were to keep increasing $x_1$, then some basic variables would become negative, which is not allowed as all variables must be non-negative. This completes one iteration of the simplex method."},{"id":"the-diet-problem","metadata":{"permalink":"/mip-start-demo/blog/the-diet-problem","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-29-the-diet-problem.md","source":"@site/blog/2019-05-29-the-diet-problem.md","title":"The diet problem","description":"The Diet Problem, also known as Stigler diet, is a classic","date":"2019-05-29T00:00:00.000Z","tags":[{"label":"the diet problem","permalink":"/mip-start-demo/blog/tags/the-diet-problem"},{"label":"linear programming","permalink":"/mip-start-demo/blog/tags/linear-programming"}],"readingTime":1.235,"hasTruncateMarker":true,"authors":[{"name":"Aster Santana","title":"CEO and founder of MipWise","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png","key":"aster"}],"frontMatter":{"slug":"the-diet-problem","title":"The diet problem","authors":"aster","tags":["the diet problem","linear programming"]},"unlisted":false,"prevItem":{"title":"Derivation of the simplex algorithm","permalink":"/mip-start-demo/blog/the-simplex-algorithm"},"nextItem":{"title":"Resourcefulness","permalink":"/mip-start-demo/blog/resourcefulness"}},"content":"The *Diet Problem*, also known as *Stigler diet*, is a classic \\noptimization problem widely used to illustrate a use case\\nof linear programming. You can find much more details on Wikipedia: \\n[Stigler Diet](https://en.wikipedia.org/wiki/Stigler_diet)\\n\\n\x3c!--truncate--\x3e\\nHere is a short statement of the problem:\\n\\n*Given a set of foods and a set of nutrients, the goal is to \\nmake a selection of food and the respective quantity to compose \\nthe least expensive diet that meets min and max recommended \\nintake of nutrients.*\\n\\n## Input schema\\nWe can then organize the input data for the Diet Problem in three\\ntables, `foods`, `nutrients`, and `foods_nutrients`, where the \\nfirst two are master tables.\\n\\nHere is a sample data, our [development instance][development_instance],\\nwith three foods and two nutrients only:\\n\\n* `foods`\\n\\n| Food ID | Food Name  | Per Unit Cost |\\n|:-------:|:----------:|:-------------:|\\n|   f1    |   Grapes   |      3.5      |\\n|   f2    |   Melon    |      5.6      |\\n|   f3    | Watermelon |      2.3      |\\n\\n* `nutrients`\\n\\n| Nutrient ID | Nutrient Name | Min Intake | Max Intake |\\n|:-----------:|:-------------:|:----------:|:----------:|\\n|     n1      |   Calories    |   2000.0   |   4000.0   |\\n|     n2      | Carbohydrates |   250.0    |   450.0    |\\n\\n* `foods_nutrients`\\n\\n| Food ID | Nutrient ID | Quantity |\\n|:-------:|:-----------:|:--------:|\\n|   f1    |     n1      |   0.69   |\\n|   f2    |     n1      |   0.28   |\\n|   f3    |     n1      |   0.3    |\\n|   f1    |     n2      |  0.181   |\\n|   f2    |     n2      |  0.0658  |\\n|   f3    |     n2      |  0.0755  |\\n\\n[development_instance](/program/mip_go/discover/welcome)"},{"id":"resourcefulness","metadata":{"permalink":"/mip-start-demo/blog/resourcefulness","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-28-resourcefulness.md","source":"@site/blog/2019-05-28-resourcefulness.md","title":"Resourcefulness","description":"Resourcefulness is one of the most powerful word you","date":"2019-05-28T00:00:00.000Z","tags":[{"label":"resourcefulness","permalink":"/mip-start-demo/blog/tags/resourcefulness"},{"label":"philosophy","permalink":"/mip-start-demo/blog/tags/philosophy"}],"readingTime":1.715,"hasTruncateMarker":true,"authors":[{"name":"Aster Santana","title":"CEO MipWise","url":"https://github.com/astersantana","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"resourcefulness","title":"Resourcefulness","authors":{"name":"Aster Santana","title":"CEO MipWise","url":"https://github.com/astersantana","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["resourcefulness","philosophy"]},"unlisted":false,"prevItem":{"title":"The diet problem","permalink":"/mip-start-demo/blog/the-diet-problem"}},"content":"Resourcefulness is one of the most powerful word you\\nhave ever seen. You may have not realized that until\\nnow, and that\'s why we dedicated this section to it.\\n\\n\x3c!--truncate--\x3e\\n\\nLet\'s start with three pair of words formed by a noun \\nand a verb that deserve each other:\\n* Goal - Achieve\\n* Challenge - Overcome\\n* Creativity - Innovate\\n\\nBy combining these words we can come up with the following\\ndefinition of resourcefulness:\\n*The ability to use creativity to innovate and overcome\\nchallenges to achieve goals*.\\n\\nNow, here is a question for you:  \\nHow often do you need to overcome challenges to achieve goals?\\n\\nIf you say \\"not often\\", it\'s because you are not setting \\nbig enough goals. Which means that you have settled in your \\ncomfort zone and are missing opportunity to grow.\\n\\nIf your answer is \\"quite often\\" or \\"very often\\", then\\nhere is another question for you:  \\nHow often do you use creativity to innovate and overcome\\nchallenges?\\n\\nIf you say \\"not often\\", then you have probably been \\nconsuming more resources than you need and, again, leaving\\nopportunities on the table.\\n\\nYou might say: \\"Well, if I have plenty of resources, why\\nshould I bother?\\"\\n\\nIt\'s a fair question. But think this way: if you have plenty\\nof resources, then you should rise the bar for your goals.\\nThen you will find opportunities to be resourceful again,\\njust that in another level.\\n\\nAfter all, what is so powerful about the word resourcefulness?  \\nVery simple: **resourcefulness is itself a true source of innovation.**\\n\\nDidn\'t get it? Then check out the book *Sky Color, by Peter H. Reynolds*.\\nIt\'s a children book that you should consider buying to your\\nkids, or a kid you know. In the meantime, you can watch this video:\\n[Sky Color by Peter H. Reynolds : Read-Along][sky-colors] (2:45 min)\\n\\n[sky-colors]: https://www.youtube.com/watch?v=2KfiyIk6Q-k\\n\\nPutting it simply, resourcefulness is all about doing more\\nwith less. Which is itself a goal and a challenge.\\nAnd creativity is the mean by which we do more with less.\\nThen innovation is the outcome."}]}}')}}]);