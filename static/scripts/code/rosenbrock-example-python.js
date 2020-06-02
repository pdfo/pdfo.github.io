document.write('<link rel="stylesheet" href="static/scripts/plugins/gist-embed-31007ea0d3bd9f80540adfbc55afc7bd.css">')
document.write('<div id=\"gist102294094\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-rosenbrock_example-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-python \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\" data-paste-markdown-skip>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>from<\/span> <span class=pl-s1>pdfo<\/span> <span class=pl-k>import<\/span> <span class=pl-s1>pdfo<\/span>, <span class=pl-v>Bounds<\/span>, <span class=pl-v>LinearConstraint<\/span>, <span class=pl-v>NonlinearConstraint<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c># If SciPy (version 1.1 or above) is installed, then Bounds, LinearConstraint,<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c># and NonlinearConstraint can alternatively be imported from scipy.optimize.<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>import<\/span> <span class=pl-s1>numpy<\/span> <span class=pl-k>as<\/span> <span class=pl-s1>np<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC5\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC7\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>def<\/span> <span class=pl-en>chrosen<\/span>(<span class=pl-s1>x<\/span>):  <span class=pl-c># the subroutine defining the objective function<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC8\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-k>return<\/span> <span class=pl-en>sum<\/span>((<span class=pl-c1>1<\/span> <span class=pl-c1>-<\/span> <span class=pl-s1>x<\/span>[:<span class=pl-c1>-<\/span><span class=pl-c1>1<\/span>]) <span class=pl-c1>**<\/span> <span class=pl-c1>2<\/span> <span class=pl-c1>+<\/span> <span class=pl-c1>4<\/span> <span class=pl-c1>*<\/span> (<span class=pl-s1>x<\/span>[<span class=pl-c1>1<\/span>:] <span class=pl-c1>-<\/span> <span class=pl-s1>x<\/span>[:<span class=pl-c1>-<\/span><span class=pl-c1>1<\/span>] <span class=pl-c1>**<\/span> <span class=pl-c1>2<\/span>) <span class=pl-c1>**<\/span> <span class=pl-c1>2<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC9\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC10\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC11\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>def<\/span> <span class=pl-en>nlc_ineq<\/span>(<span class=pl-s1>x<\/span>):  <span class=pl-c># the subroutine defining the nonlinear inequality constraints<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC12\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-k>return<\/span> <span class=pl-s1>x<\/span>[:<span class=pl-c1>-<\/span><span class=pl-c1>1<\/span>] <span class=pl-c1>**<\/span> <span class=pl-c1>2<\/span> <span class=pl-c1>-<\/span> <span class=pl-s1>x<\/span>[<span class=pl-c1>1<\/span>:]<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC13\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC14\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC15\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>def<\/span> <span class=pl-en>nlc_eq<\/span>(<span class=pl-s1>x<\/span>):  <span class=pl-c># the subroutine defining the nonlinear equality constraints<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC16\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-k>return<\/span> <span class=pl-en>sum<\/span>(<span class=pl-s1>x<\/span> <span class=pl-c1>**<\/span> <span class=pl-c1>2<\/span>) <span class=pl-c1>-<\/span> <span class=pl-c1>1<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC17\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC18\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC19\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>if<\/span> <span class=pl-s1>__name__<\/span> <span class=pl-c1>==<\/span> <span class=pl-s>&#39;__main__&#39;<\/span>:<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC20\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-en>print<\/span>(<span class=pl-s>&#39;<span class=pl-cce>\\n<\/span>Minimize the chained Rosenbrock function with three variables subject to various constraints:<span class=pl-cce>\\n<\/span>&#39;<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC21\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>x0<\/span> <span class=pl-c1>=<\/span> [<span class=pl-c1>0<\/span>, <span class=pl-c1>0<\/span>, <span class=pl-c1>0<\/span>]  <span class=pl-c># starting point<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC22\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC23\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-en>print<\/span>(<span class=pl-s>&#39;<span class=pl-cce>\\n<\/span>1. Nonlinear constraints --- ||x||_2^2 = 1, x(i)^2 &gt;= x(i+1) &gt;= 0.5*x(i) &gt;= 0 for i = 1, 2:<span class=pl-cce>\\n<\/span>&#39;<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC24\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>lb<\/span> <span class=pl-c1>=<\/span> [<span class=pl-c1>0<\/span>, <span class=pl-c1>0<\/span>, <span class=pl-c1>0<\/span>]<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC25\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>ub<\/span> <span class=pl-c1>=<\/span> [<span class=pl-s1>np<\/span>.<span class=pl-s1>inf<\/span>, <span class=pl-s1>np<\/span>.<span class=pl-s1>inf<\/span>, <span class=pl-s1>np<\/span>.<span class=pl-s1>inf<\/span>]  <span class=pl-c># ub = [None, None, None] or ub = None works equally well<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC26\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>bounds<\/span> <span class=pl-c1>=<\/span> <span class=pl-v>Bounds<\/span>(<span class=pl-s1>lb<\/span>, <span class=pl-s1>ub<\/span>)  <span class=pl-c># bound constraints: lb &lt;= x &lt;= ub<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC27\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-c># Bound constraints can also be written as: bounds = [(lb[0], ub[0]), (lb[1], ub[1]), (lb[2], ub[2])]<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L28\" class=\"blob-num js-line-number\" data-line-number=\"28\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC28\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-v>A<\/span> <span class=pl-c1>=<\/span> [[<span class=pl-c1>0.5<\/span>, <span class=pl-c1>-<\/span><span class=pl-c1>1<\/span>, <span class=pl-c1>0<\/span>], [<span class=pl-c1>0<\/span>, <span class=pl-c1>0.5<\/span>, <span class=pl-c1>-<\/span><span class=pl-c1>1<\/span>]]<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L29\" class=\"blob-num js-line-number\" data-line-number=\"29\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC29\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>lin_lb<\/span> <span class=pl-c1>=<\/span> [<span class=pl-c1>-<\/span><span class=pl-s1>np<\/span>.<span class=pl-s1>inf<\/span>, <span class=pl-c1>-<\/span><span class=pl-s1>np<\/span>.<span class=pl-s1>inf<\/span>]<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L30\" class=\"blob-num js-line-number\" data-line-number=\"30\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC30\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>lin_ub<\/span> <span class=pl-c1>=<\/span> [<span class=pl-c1>0<\/span>, <span class=pl-c1>0<\/span>]<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L31\" class=\"blob-num js-line-number\" data-line-number=\"31\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC31\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>lin_con<\/span> <span class=pl-c1>=<\/span> <span class=pl-v>LinearConstraint<\/span>(<span class=pl-v>A<\/span>, <span class=pl-s1>lin_lb<\/span>, <span class=pl-s1>lin_ub<\/span>)  <span class=pl-c># inequality constraints: lin_lb &lt;= A*x &lt;= lin_ub<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L32\" class=\"blob-num js-line-number\" data-line-number=\"32\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC32\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>nonlin_lb<\/span> <span class=pl-c1>=<\/span> [<span class=pl-c1>0<\/span>, <span class=pl-c1>0<\/span>]<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L33\" class=\"blob-num js-line-number\" data-line-number=\"33\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC33\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>nonlin_ub<\/span> <span class=pl-c1>=<\/span> [<span class=pl-s1>np<\/span>.<span class=pl-s1>inf<\/span>, <span class=pl-s1>np<\/span>.<span class=pl-s1>inf<\/span>]<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L34\" class=\"blob-num js-line-number\" data-line-number=\"34\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC34\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>nonlin_con_ineq<\/span> <span class=pl-c1>=<\/span> <span class=pl-v>NonlinearConstraint<\/span>(<span class=pl-s1>nlc_ineq<\/span>, <span class=pl-s1>nonlin_lb<\/span>, <span class=pl-s1>nonlin_ub<\/span>)  <span class=pl-c># inequality constraints: nonlin_lb &lt;= nlc_ineq(x) &lt;= nonlin_ub<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L35\" class=\"blob-num js-line-number\" data-line-number=\"35\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC35\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>nonlin_con_eq<\/span> <span class=pl-c1>=<\/span> <span class=pl-v>NonlinearConstraint<\/span>(<span class=pl-s1>nlc_eq<\/span>, <span class=pl-c1>0<\/span>, <span class=pl-c1>0<\/span>)  <span class=pl-c># equality constraint: nlc_eq(x) = 0 <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L36\" class=\"blob-num js-line-number\" data-line-number=\"36\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC36\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-c># Nonlinear constraints can also be defined as dictionaries:<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L37\" class=\"blob-num js-line-number\" data-line-number=\"37\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC37\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-c>#nonlin_con_ineq = {&#39;type&#39;: &#39;ineq&#39;, &#39;fun&#39;: nlc_ineq}  # inequality constraint: nlc_ineq(x) &gt;= 0<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L38\" class=\"blob-num js-line-number\" data-line-number=\"38\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC38\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-c>#nonlin_con_eq = {&#39;type&#39;: &#39;eq&#39;, &#39;fun&#39;: nlc_eq}  # inequality constraint: nlc_eq(x) = 0<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L39\" class=\"blob-num js-line-number\" data-line-number=\"39\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC39\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>res<\/span> <span class=pl-c1>=<\/span> <span class=pl-en>pdfo<\/span>(<span class=pl-s1>chrosen<\/span>, <span class=pl-s1>x0<\/span>, <span class=pl-s1>bounds<\/span><span class=pl-c1>=<\/span><span class=pl-s1>bounds<\/span>, <span class=pl-s1>constraints<\/span><span class=pl-c1>=<\/span>[<span class=pl-s1>lin_con<\/span>, <span class=pl-s1>nonlin_con_ineq<\/span>, <span class=pl-s1>nonlin_con_eq<\/span>])  <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L40\" class=\"blob-num js-line-number\" data-line-number=\"40\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC40\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-en>print<\/span>(<span class=pl-s1>res<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L41\" class=\"blob-num js-line-number\" data-line-number=\"41\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC41\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L42\" class=\"blob-num js-line-number\" data-line-number=\"42\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC42\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-en>print<\/span>(<span class=pl-s>&#39;<span class=pl-cce>\\n<\/span>2. Linear constraints --- sum(x) = 1, x(i+1) &lt;= x(i) &lt;= 1 for i = 1, 2:<span class=pl-cce>\\n<\/span>&#39;<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L43\" class=\"blob-num js-line-number\" data-line-number=\"43\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC43\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>bounds<\/span> <span class=pl-c1>=<\/span> <span class=pl-v>Bounds<\/span>([<span class=pl-c1>-<\/span><span class=pl-s1>np<\/span>.<span class=pl-s1>inf<\/span>, <span class=pl-c1>-<\/span><span class=pl-s1>np<\/span>.<span class=pl-s1>inf<\/span>, <span class=pl-c1>-<\/span><span class=pl-s1>np<\/span>.<span class=pl-s1>inf<\/span>], [<span class=pl-c1>1<\/span>, <span class=pl-c1>1<\/span>, <span class=pl-c1>1<\/span>])<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L44\" class=\"blob-num js-line-number\" data-line-number=\"44\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC44\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-v>A<\/span> <span class=pl-c1>=<\/span> [[<span class=pl-c1>-<\/span><span class=pl-c1>1<\/span>, <span class=pl-c1>1<\/span>, <span class=pl-c1>0<\/span>], [<span class=pl-c1>0<\/span>, <span class=pl-c1>-<\/span><span class=pl-c1>1<\/span>, <span class=pl-c1>1<\/span>], [<span class=pl-c1>1<\/span>, <span class=pl-c1>1<\/span>, <span class=pl-c1>1<\/span>]]<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L45\" class=\"blob-num js-line-number\" data-line-number=\"45\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC45\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>lin_con<\/span> <span class=pl-c1>=<\/span> <span class=pl-v>LinearConstraint<\/span>(<span class=pl-v>A<\/span>, [<span class=pl-c1>-<\/span><span class=pl-s1>np<\/span>.<span class=pl-s1>inf<\/span>, <span class=pl-c1>-<\/span><span class=pl-s1>np<\/span>.<span class=pl-s1>inf<\/span>, <span class=pl-c1>1<\/span>], [<span class=pl-c1>0<\/span>, <span class=pl-c1>0<\/span>, <span class=pl-c1>1<\/span>])<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L46\" class=\"blob-num js-line-number\" data-line-number=\"46\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC46\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>res<\/span> <span class=pl-c1>=<\/span> <span class=pl-en>pdfo<\/span>(<span class=pl-s1>chrosen<\/span>, <span class=pl-s1>x0<\/span>, <span class=pl-s1>bounds<\/span><span class=pl-c1>=<\/span><span class=pl-s1>bounds<\/span>, <span class=pl-s1>constraints<\/span><span class=pl-c1>=<\/span><span class=pl-s1>lin_con<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L47\" class=\"blob-num js-line-number\" data-line-number=\"47\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC47\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-en>print<\/span>(<span class=pl-s1>res<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L48\" class=\"blob-num js-line-number\" data-line-number=\"48\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC48\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L49\" class=\"blob-num js-line-number\" data-line-number=\"49\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC49\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-en>print<\/span>(<span class=pl-s>&#39;<span class=pl-cce>\\n<\/span>3. Bound constraints --- -0.5 &lt;= x(1) &lt;= 0.5, 0 &lt;= x(2) &lt;= 0.25:<span class=pl-cce>\\n<\/span>&#39;<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L50\" class=\"blob-num js-line-number\" data-line-number=\"50\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC50\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>bounds<\/span> <span class=pl-c1>=<\/span> <span class=pl-v>Bounds<\/span>([<span class=pl-c1>-<\/span><span class=pl-c1>0.5<\/span>, <span class=pl-c1>0<\/span>, <span class=pl-c1>-<\/span><span class=pl-s1>np<\/span>.<span class=pl-s1>inf<\/span>], [<span class=pl-c1>0.5<\/span>, <span class=pl-c1>0.25<\/span>, <span class=pl-s1>np<\/span>.<span class=pl-s1>inf<\/span>])<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L51\" class=\"blob-num js-line-number\" data-line-number=\"51\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC51\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>res<\/span> <span class=pl-c1>=<\/span> <span class=pl-en>pdfo<\/span>(<span class=pl-s1>chrosen<\/span>, <span class=pl-s1>x0<\/span>, <span class=pl-s1>bounds<\/span><span class=pl-c1>=<\/span><span class=pl-s1>bounds<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L52\" class=\"blob-num js-line-number\" data-line-number=\"52\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC52\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-en>print<\/span>(<span class=pl-s1>res<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L53\" class=\"blob-num js-line-number\" data-line-number=\"53\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC53\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L54\" class=\"blob-num js-line-number\" data-line-number=\"54\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC54\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-en>print<\/span>(<span class=pl-s>&#39;<span class=pl-cce>\\n<\/span>4. No constraints:<span class=pl-cce>\\n<\/span>&#39;<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L55\" class=\"blob-num js-line-number\" data-line-number=\"55\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC55\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>res<\/span> <span class=pl-c1>=<\/span> <span class=pl-en>pdfo<\/span>(<span class=pl-s1>chrosen<\/span>, <span class=pl-s1>x0<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-py-L56\" class=\"blob-num js-line-number\" data-line-number=\"56\"><\/td>\n        <td id=\"file-rosenbrock_example-py-LC56\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-en>print<\/span>(<span class=pl-s1>res<\/span>)<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"static/scripts/code/rosenbrock_example.py\" style=\"float:right\">Download<\/a>\n        rosenbrock_example.py\n        <\/div>\n    <\/div>\n<\/div>\n')
