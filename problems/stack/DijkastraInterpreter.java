import java.util.Stack;

class DijkastraInterpreter {

    private Stack<String> operationstack;
    private Stack<Double> valueStack;

    public DijkastraInterpreter() {
        this.operationstack =  new Stack<>();
        this.valueStack = new Stack<>();
    }

    public void interpretExpression(String expression) {
		expression = expression.replaceAll(" ", "");
		System.out.println(expression);
		String[] expressionArray = expression.split("");

		for (String s:expressionArray) {
			if(s.equals("(")) {
				//do nothing
			} else if (s.equals("+")) {
				this.operationstack.push(s);
			} else if (s.equals("*")) {
				this.operationstack.push(s);
			} else if (s.equals("-")) {
				this.operationstack.push(s);
			} else if (s.equals("/")) {
				this.operationstack.push(s);
			} else if (s.equals(")")) {
				String operation = this.operationstack.pop();
				if (operation.equals("+" )) {
					this.valueStack.push(this.valueStack.pop()+this.valueStack.pop());
				} else if (operation.equals("*" )) {
					this.valueStack.push(this.valueStack.pop()*this.valueStack.pop());
				} else if(operation.equals("-" )) {
					this.valueStack.push(-this.valueStack.pop()+this.valueStack.pop());
				} else if (operation.equals("/" )) {
					this.valueStack.push(1/this.valueStack.pop()*this.valueStack.pop());
				} 
			} else {
				this.valueStack.push(Double.parseDouble(s));
			}
		}
		
	}
	public void result() {
		System.out.println(this.valueStack.pop());
	}

    public static void main(String[] args) {
        DijkastraInterpreter interpreter = new DijkastraInterpreter();
        interpreter.interpretExpression("( ( 1 + 2 ) * ( 2 + 1 ) )");
        interpreter.result();
    }
} 