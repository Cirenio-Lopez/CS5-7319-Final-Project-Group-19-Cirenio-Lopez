import abc

class LockedAndUnlockedInterface(metaclass=abc.ABCMeta):
    @classmethod
    def __subclasshook__(cls, subclass: type) -> bool:
        return (hasattr(subclass, 'put') and 
                callable(subclass.put) and 
                hasattr(subclass, 'get') and 
                callable(subclass.get))