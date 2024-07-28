# Компонент для пользовательских виджетов

## Пример использования

```jsx
import {UserWidgets} from "./UserWidgets";
import {UserWidget} from "../UserWidget/UserWidget";
import {UserWidgetsColumn} from "../UserWidgetsColumn/UserWidgetsColumn";

<UserWidgets>
  <UserWidgetsColumn>
    <UserWidget name={"TV-программа"}></UserWidget>
    <UserWidget name={"TV-программа"}></UserWidget>
  </UserWidgetsColumn>
  <UserWidgetsColumn>
    <UserWidget name={"Рецепты"}></UserWidget>
  </UserWidgetsColumn>
</UserWidgets> 
```