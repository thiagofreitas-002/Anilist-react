import * as A from './styles'
import {
  House,
  Play,
  BookOpen,
  User,
  BellSimple,
  MagnifyingGlass,
  GearSix,
  Cloud,
} from 'phosphor-react'

export function MobileButton() {
  return (
    <A.Menu>
      <A.Avatar className="toggle">
        <img
          src="https://i.pinimg.com/736x/e7/fe/70/e7fe701cff4a18cdd05ae67b79ef8376.jpg"
          alt=""
        />
      </A.Avatar>

      <li /* style="--i:0;--clr:#ff2972" */>
        <a href="">
          <House />
        </a>
      </li>

      <li /* style="--i:1;--clr:#fee800" */>
        <a href="">
          <Play />
        </a>
      </li>

      <li /* style="--i:2;--clr:#04fc43" */>
        <a href="">
          <BookOpen />
        </a>
      </li>

      <li /* style="--i:3;--clr:#fe00f1" */>
        <a href="">
          <User />
        </a>
      </li>

      <li /* style="--i:4;--clr:#00b0fe" */>
        <a href="">
          <BellSimple />
        </a>
      </li>

      <li /* style="--i:5;--clr:#fea600" */>
        <a href="">
          <MagnifyingGlass />
        </a>
      </li>

      <li /* style="--i:6;--clr:#a529ff" */>
        <a href="">
          <GearSix />
        </a>
      </li>

      <li /* style="--i:7;--clr:#01bcab" */>
        <a href="">
          <Cloud />
        </a>
      </li>
    </A.Menu>
  )
}
