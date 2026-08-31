#[derive(Debug, Clone, Copy)]
enum Shade {
    Mint,
    Violet,
    Blue,
}

trait Render {
    fn render(&self) -> &'static str;
}

impl Render for Shade {
    fn render(&self) -> &'static str {
        match self {
            Self::Mint => "#CFFFE7",
            Self::Violet => "#B99CFF",
            Self::Blue => "#84B5F2",
        }
    }
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    for shade in [Shade::Mint, Shade::Violet, Shade::Blue] {
        println!("{shade:?} aurora: {}", shade.render());
    }
    Ok(())
}
