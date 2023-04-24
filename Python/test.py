class Print():
    def __init__(self):
        self.message = ''
        pass
    
    def init(self,message: str):
        self.message = message
        return self
        
    def execute(self):
        return print(self.message)