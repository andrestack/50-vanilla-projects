const smallCupsTS: NodeListOf<Element> = document.querySelectorAll(".cup-small")
const litersTS: HTMLElement | null = document.getElementById(
  "liters"
) as HTMLElement
const percentageTS: HTMLElement = document.getElementById(
  "percentage"
) as HTMLElement
const remainedTS: HTMLElement = document.getElementById(
  "remained"
) as HTMLElement

updateBigCup1()

smallCupsTS.forEach((cup: Element, idx: number) => {
  cup.addEventListener("click", () => highlightCups(idx))
})

function highlightCups1(idx: number): void {
  if (
    smallCupsTS[idx].classList.contains("full") &&
    !smallCupsTS[idx].nextElementSibling?.classList.contains("full")
  ) {
    idx--
  }

  smallCupsTS.forEach((cup: Element, idx2: number) => {
    if (idx2 <= idx) {
      cup.classList.add("full")
    } else {
      cup.classList.remove("full")
    }
  })

  updateBigCup1()
}

function updateBigCup1(): void {
  const fullCups: number = document.querySelectorAll(".cup-small.full").length
  const totalCups: number = smallCups.length

  if (fullCups === 0) {
    percentageTS!.style.visibility = "hidden"
    percentageTS!.style.height = "0"
  } else {
    percentageTS!.style.visibility = "visible"
    percentageTS!.style.height = `${(fullCups / totalCups) * 330}px`
    percentageTS!.innerText = `${(fullCups / totalCups) * 100}%`
  }

  if (fullCups === totalCups) {
    remainedTS!.style.visibility = "hidden"
    remained!.style.height = "0"
  } else {
    remainedTS!.style.visibility = "visible"
    litersTS!.innerText = `${2 - (250 * fullCups) / 1000}L`
  }
}
