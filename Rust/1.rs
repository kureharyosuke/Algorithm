fn find_min(a: i32, b:i32, c:i32) -> i32 {
  let mut answer = a;

  if b < answer {
    answer = b;
  }

  if c < answer {
    answer = c;
  }

  return answer;
}

fn find_min2(a: i32, b:i32, c:i32) -> i32 {
  [a, b, c].iter().min().unwrap().clone()
}
