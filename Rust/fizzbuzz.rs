fn main() {
  for i in 1..101 {
    if i % 3 == 0 && i % 5 == 0 {
      println!("FizzBuzz {}", i)
    } else if i % 3 == 0 {
      println!("Fizz {}", i)
    } else if i % 5 == 0 {
      println!("Buzz {}", i)
    } else {
      println!("{}", i)
    }
  }
}