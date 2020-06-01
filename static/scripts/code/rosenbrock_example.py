from pdfo import pdfo, Bounds, LinearConstraint, NonlinearConstraint
# If SciPy (version 1.1 or above) is installed, then Bounds, LinearConstraint,
# and NonlinearConstraint can alternatively be imported from scipy.optimize.
import numpy as np


def chrosen(x):  # the subroutine defining the objective function
    return sum((1 - x[:-1]) ** 2 + 4 * (x[1:] - x[:-1] ** 2) ** 2)


def nlc_ineq(x):  # the subroutine defining the nonlinear inequality constraints
    return x[:-1] ** 2 - x[1:]


def nlc_eq(x):  # the subroutine defining the nonlinear equality constraints
    return sum(x ** 2) - 1


if __name__ == '__main__':
    print('\nMinimize the chained Rosenbrock function with three variables subject to various constraints:\n')
    x0 = [0, 0, 0]  # starting point

    print('\n1. Nonlinear constraints --- ||x||_2^2 = 1, x(i)^2 >= x(i+1) >= 0.5*x(i) >= 0 for i = 1, 2:\n')
    lb = [0, 0, 0]
    ub = [np.inf, np.inf, np.inf]  # ub = [None, None, None] or ub = None works equally well
    bounds = Bounds(lb, ub)  # bound constraints: lb <= x <= ub
    # Bound constraints can also be written as: bounds = [(lb[0], ub[0]), (lb[1], ub[1]), (lb[2], ub[2])]
    A = [[0.5, -1, 0], [0, 0.5, -1]]
    lin_lb = [-np.inf, -np.inf]
    lin_ub = [0, 0]
    lin_con = LinearConstraint(A, lin_lb, lin_ub)  # inequality constraints: lin_lb <= A*x <= lin_ub
    nonlin_lb = [0, 0]
    nonlin_ub = [np.inf, np.inf]
    nonlin_con_ineq = NonlinearConstraint(nlc_ineq, nonlin_lb, nonlin_ub)  # inequality constraints: nonlin_lb <= nlc_ineq(x) <= nonlin_ub
    nonlin_con_eq = NonlinearConstraint(nlc_eq, 0, 0)  # equality constraint: nlc_eq(x) = 0 
    # Nonlinear constraints can also be written as follows: 
    #nonlin_con_ineq = {'type': 'ineq', 'fun': nlc_ineq}  # inequality constraint: nlc_ineq(x) >= 0
    #nonlin_con_eq = {'type': 'eq', 'fun': nlc_eq}  # inequality constraint: nlc_eq(x) = 0
    res = pdfo(chrosen, x0, bounds=bounds, constraints=[lin_con, nonlin_con_ineq, nonlin_con_eq])  
    print(res)

    print('\n2. Linear constraints --- sum(x) = 1, x(i+1) <= x(i) <= 1 for i = 1, 2:\n')
    bounds = Bounds([-np.inf, -np.inf, -np.inf], [1, 1, 1])
    A = [[-1, 1, 0], [0, -1, 1], [1, 1, 1]]
    lin_con = LinearConstraint(A, [-np.inf, -np.inf, 1], [0, 0, 1])
    res = pdfo(chrosen, x0, bounds=bounds, constraints=lin_con)
    print(res)

    print('\n3. Bound constraints --- -0.5 <= x(1) <= 0.5, 0 <= x(2) <= 0.25:\n')
    bounds = Bounds([-0.5, 0, -np.inf], [0.5, 0.25, np.inf])
    res = pdfo(chrosen, x0, bounds=bounds)
    print(res)

    print('\n4. No constraints:\n')
    res = pdfo(chrosen, x0)
    print(res)
