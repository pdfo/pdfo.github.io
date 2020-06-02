document.write('<link rel="stylesheet" href="static/scripts/plugins/gist-embed-31007ea0d3bd9f80540adfbc55afc7bd.css">')
document.write('<div id=\"gist102293885\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-rosenbrock_example-m\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-matlab \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\" data-paste-markdown-skip>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">function<\/span> <span class=\"pl-en\">rosenbrock_example<\/span>()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC2\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC3\" class=\"blob-code blob-code-inner js-file-line\">fprintf(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span><span class=\"pl-cce\">\\n<\/span>Minimize the chained Rosenbrock function with three variables subject to various constraints:<span class=\"pl-cce\">\\n<\/span><span class=\"pl-pds\">&#39;<\/span><\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC4\" class=\"blob-code blob-code-inner js-file-line\">x0 = [<span class=\"pl-c1\">0<\/span>; <span class=\"pl-c1\">0<\/span>; <span class=\"pl-c1\">0<\/span>];  <span class=\"pl-c\"><span class=\"pl-c\">%<\/span> starting point<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC5\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC6\" class=\"blob-code blob-code-inner js-file-line\">fprintf(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span><span class=\"pl-cce\">\\n<\/span>1. Nonlinear constraints --- ||x||_2^2 = 1, x(i)^2 &gt;= x(i+1) &gt;= 0.5*x(i) &gt;= 0 for i = 1, 2:<span class=\"pl-cce\">\\n<\/span><span class=\"pl-pds\">&#39;<\/span><\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC7\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">%<\/span> linear inequality constraints A*x &lt;= b<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC8\" class=\"blob-code blob-code-inner js-file-line\">A = [<span class=\"pl-c1\">0.5<\/span>, -<span class=\"pl-c1\">1<\/span>, <span class=\"pl-c1\">0<\/span>; <span class=\"pl-c1\">0<\/span>, <span class=\"pl-c1\">0.5<\/span>, -<span class=\"pl-c1\">1<\/span>];<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC9\" class=\"blob-code blob-code-inner js-file-line\">b = [<span class=\"pl-c1\">0<\/span>; <span class=\"pl-c1\">0<\/span>];<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC10\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">%<\/span> linear equality constraints Aeq*x = beq<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC11\" class=\"blob-code blob-code-inner js-file-line\">Aeq = [];<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC12\" class=\"blob-code blob-code-inner js-file-line\">beq = [];<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC13\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">%<\/span> bound constraints lb &lt;= x &lt;= ub<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC14\" class=\"blob-code blob-code-inner js-file-line\">lb = [<span class=\"pl-c1\">0<\/span>; <span class=\"pl-c1\">0<\/span>; <span class=\"pl-c1\">0<\/span>];<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC15\" class=\"blob-code blob-code-inner js-file-line\">ub = [];  <span class=\"pl-c\"><span class=\"pl-c\">%<\/span> ub = [inf; inf; inf] works equally well<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC16\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">%<\/span> nonlinear constraints<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC17\" class=\"blob-code blob-code-inner js-file-line\">nonlcon = @nlc;  <span class=\"pl-c\"><span class=\"pl-c\">%<\/span> see function nlc given below<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC18\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">%<\/span> The following syntax is identical to fmincon:<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC19\" class=\"blob-code blob-code-inner js-file-line\">[x, fx, exitflag, output] = pdfo(@chrosen, x0, A, b, Aeq, beq, lb, ub, nonlcon)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC20\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">%<\/span> Alternatively, the problem can be passed to pdfo as a structure:<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC21\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">%<\/span>p.objective = @chrosen; p.x0 = x0; p.Aineq = A; p.bineq = b; p.lb = lb; p.nonlcon = @nlc;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC22\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">%<\/span>[x, fx, exitflag, output] = pdfo(p)<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC23\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC24\" class=\"blob-code blob-code-inner js-file-line\">fprintf(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span><span class=\"pl-cce\">\\n<\/span>2. Linear constraints --- sum(x) = 1, x(i+1) &lt;= x(i) &lt;= 1 for i = 1, 2:<span class=\"pl-cce\">\\n<\/span><span class=\"pl-pds\">&#39;<\/span><\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC25\" class=\"blob-code blob-code-inner js-file-line\">A = [-<span class=\"pl-c1\">1<\/span>, <span class=\"pl-c1\">1<\/span>, <span class=\"pl-c1\">0<\/span>; <span class=\"pl-c1\">0<\/span>, -<span class=\"pl-c1\">1<\/span>, <span class=\"pl-c1\">1<\/span>];<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC26\" class=\"blob-code blob-code-inner js-file-line\">b = [<span class=\"pl-c1\">0<\/span>; <span class=\"pl-c1\">0<\/span>];<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC27\" class=\"blob-code blob-code-inner js-file-line\">Aeq = [<span class=\"pl-c1\">1<\/span>, <span class=\"pl-c1\">1<\/span>, <span class=\"pl-c1\">1<\/span>];<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L28\" class=\"blob-num js-line-number\" data-line-number=\"28\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC28\" class=\"blob-code blob-code-inner js-file-line\">beq = <span class=\"pl-c1\">1<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L29\" class=\"blob-num js-line-number\" data-line-number=\"29\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC29\" class=\"blob-code blob-code-inner js-file-line\">ub = [<span class=\"pl-c1\">1<\/span>; <span class=\"pl-c1\">1<\/span>; <span class=\"pl-c1\">1<\/span>];<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L30\" class=\"blob-num js-line-number\" data-line-number=\"30\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC30\" class=\"blob-code blob-code-inner js-file-line\">[x, fx, exitflag, output] = pdfo(@chrosen, x0, A, b, Aeq, beq, [], ub)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L31\" class=\"blob-num js-line-number\" data-line-number=\"31\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC31\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L32\" class=\"blob-num js-line-number\" data-line-number=\"32\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC32\" class=\"blob-code blob-code-inner js-file-line\">fprintf(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span><span class=\"pl-cce\">\\n<\/span>3. Bound constraints --- -0.5 &lt;= x(1) &lt;= 0.5, 0 &lt;= x(2) &lt;= 0.25:<span class=\"pl-cce\">\\n<\/span><span class=\"pl-pds\">&#39;<\/span><\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L33\" class=\"blob-num js-line-number\" data-line-number=\"33\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC33\" class=\"blob-code blob-code-inner js-file-line\">lb = [-<span class=\"pl-c1\">0.5<\/span>; <span class=\"pl-c1\">0<\/span>; -<span class=\"pl-c1\">inf<\/span>];<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L34\" class=\"blob-num js-line-number\" data-line-number=\"34\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC34\" class=\"blob-code blob-code-inner js-file-line\">ub = [<span class=\"pl-c1\">0.5<\/span>; <span class=\"pl-c1\">0.25<\/span>; <span class=\"pl-c1\">inf<\/span>];<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L35\" class=\"blob-num js-line-number\" data-line-number=\"35\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC35\" class=\"blob-code blob-code-inner js-file-line\">[x, fx, exitflag, output] = pdfo(@chrosen, x0, [], [], [], [], lb, ub)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L36\" class=\"blob-num js-line-number\" data-line-number=\"36\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC36\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L37\" class=\"blob-num js-line-number\" data-line-number=\"37\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC37\" class=\"blob-code blob-code-inner js-file-line\">fprintf(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span><span class=\"pl-cce\">\\n<\/span>4. No constraints:<span class=\"pl-cce\">\\n<\/span><span class=\"pl-pds\">&#39;<\/span><\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L38\" class=\"blob-num js-line-number\" data-line-number=\"38\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC38\" class=\"blob-code blob-code-inner js-file-line\">[x, fx, exitflag, output] = pdfo(@chrosen, x0)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L39\" class=\"blob-num js-line-number\" data-line-number=\"39\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC39\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L40\" class=\"blob-num js-line-number\" data-line-number=\"40\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC40\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">return<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L41\" class=\"blob-num js-line-number\" data-line-number=\"41\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC41\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L42\" class=\"blob-num js-line-number\" data-line-number=\"42\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC42\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L43\" class=\"blob-num js-line-number\" data-line-number=\"43\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC43\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">function<\/span> <span class=\"pl-v\">f<\/span> = <span class=\"pl-en\">chrosen<\/span>(<span class=\"pl-v\">x<\/span>)  <span class=\"pl-c\"><span class=\"pl-c\">%<\/span> the subroutine defining the objective function<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L44\" class=\"blob-num js-line-number\" data-line-number=\"44\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC44\" class=\"blob-code blob-code-inner js-file-line\">f = sum((x(<span class=\"pl-c1\">1<\/span>:<span class=\"pl-k\">end<\/span>-<span class=\"pl-c1\">1<\/span>)-<span class=\"pl-c1\">1<\/span>).^2 <span class=\"pl-k\">+<\/span> <span class=\"pl-c1\">4<\/span>*(x(<span class=\"pl-c1\">2<\/span>:<span class=\"pl-k\">end<\/span>)-x(<span class=\"pl-c1\">1<\/span>:<span class=\"pl-k\">end<\/span>-<span class=\"pl-c1\">1<\/span>).^2).^2);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L45\" class=\"blob-num js-line-number\" data-line-number=\"45\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC45\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">return<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L46\" class=\"blob-num js-line-number\" data-line-number=\"46\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC46\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L47\" class=\"blob-num js-line-number\" data-line-number=\"47\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC47\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L48\" class=\"blob-num js-line-number\" data-line-number=\"48\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC48\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">function<\/span> [<span class=\"pl-v\">cineq<\/span>, <span class=\"pl-v\">ceq<\/span>] = <span class=\"pl-en\">nlc<\/span>(<span class=\"pl-v\">x<\/span>)  <span class=\"pl-c\"><span class=\"pl-c\">%<\/span> the subroutine defining the nonlinear constraints<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L49\" class=\"blob-num js-line-number\" data-line-number=\"49\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC49\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">%<\/span> The same as fmincon, nonlinear constraints cineq(x) &lt;= 0 and ceq(x) = 0 are specified<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L50\" class=\"blob-num js-line-number\" data-line-number=\"50\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC50\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">%<\/span> by a function with two returns, the first being cineq and the second being ceq.<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L51\" class=\"blob-num js-line-number\" data-line-number=\"51\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC51\" class=\"blob-code blob-code-inner js-file-line\">cineq = x(<span class=\"pl-c1\">2<\/span>:<span class=\"pl-k\">end<\/span>) <span class=\"pl-k\">-<\/span> x(<span class=\"pl-c1\">1<\/span>:<span class=\"pl-k\">end<\/span>-<span class=\"pl-c1\">1<\/span>).^2;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L52\" class=\"blob-num js-line-number\" data-line-number=\"52\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC52\" class=\"blob-code blob-code-inner js-file-line\">ceq = x<span class=\"pl-k\">&#39;<\/span>*x <span class=\"pl-k\">-<\/span> <span class=\"pl-c1\">1<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-rosenbrock_example-m-L53\" class=\"blob-num js-line-number\" data-line-number=\"53\"><\/td>\n        <td id=\"file-rosenbrock_example-m-LC53\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">return<\/span><\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"static/scripts/code/rosenbrock_example.m\" style=\"float:right\">Download<\/a>\n        rosenbrock_example.m\n        <\/div>\n    <\/div>\n<\/div>\n')
