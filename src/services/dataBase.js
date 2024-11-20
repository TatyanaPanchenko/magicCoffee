export async function getCoffee() {
  try {
    const response = await fetch("http://localhost:3001/coffee");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
export async function getCappuccino() {
  try {
    const response = await fetch("http://localhost:3001/cappuccino");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getLatte() {
  try {
    const response = await fetch("http://localhost:3001/latte");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getRaf() {
  try {
    const response = await fetch("http://localhost:3001/raf");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
