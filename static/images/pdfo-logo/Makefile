LC = pdflatex

LFLAGS = -file-line-error -interaction=nonstopmode -shell-escape

.PHONY: clean

main: logo.tex
	$(LC) $(LFLAGS) $^

clean:
	$(RM) *.aux *.log

