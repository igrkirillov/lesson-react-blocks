import React from 'react';
import './App.css';
import {NewsSection} from "./components/NewsSection/NewsSection";
import {NewsCategory} from "./components/NewsCategory/NewsCategory";
import {YandexApps} from "./components/YandexApps/YandexApps";
import {YandexApp} from "./components/YandexApp/YandexApp";
import {YandexSearch} from "./components/YandexSearch/YandexSearch";
import {AddsBarSection} from "./components/AddsBarSection/AddsBarSection";
import {UserWidgets} from "./components/UserWidgets/UserWidgets";
import {UserWidget} from "./components/UserWidget/UserWidget";
import {UserWidgetsColumn} from "./components/UserWidgetsColumn/UserWidgetsColumn";
import {StartPageHeader} from "./components/StartPageHeader/StartPageHeader";
import {StartPageContent} from "./components/StartPageContent/StartPageContent";
import {StartPageFooter} from "./components/StartPageFooter/StartPageFooter";

function App() {
  return (
    <>
      <StartPageHeader>
        <NewsSection>
          <NewsCategory category={"Сейчас в СМИ"}></NewsCategory>
          <NewsCategory category={"В Германии"}></NewsCategory>
          <NewsCategory category={"Рекомендуем"}></NewsCategory>
        </NewsSection>
        <AddsBarSection imageUrl={""}></AddsBarSection>
      </StartPageHeader>

      <StartPageContent>
        <YandexApps>
          <YandexApp name={"Видео"}></YandexApp>
          <YandexApp name={"Картинки"}></YandexApp>
          <YandexApp name={"Новости"}></YandexApp>
          <YandexApp name={"Карты"}></YandexApp>
          <YandexApp name={"Маркет"}></YandexApp>
          <YandexApp name={"Переводчик"}></YandexApp>
          <YandexApp name={"Эфир"}></YandexApp>
          <YandexApp name={"ещё"}></YandexApp>
        </YandexApps>
        <YandexSearch></YandexSearch>
      </StartPageContent>

      <StartPageFooter>
        <AddsBarSection imageUrl={""}></AddsBarSection>
        <UserWidgets>
          <UserWidgetsColumn>
            <UserWidget name={"Погода"}></UserWidget>
            <UserWidget name={"Посещаемое"}></UserWidget>
          </UserWidgetsColumn>
          <UserWidgetsColumn>
            <UserWidget name={"Карта Германии"}></UserWidget>
            <UserWidget name={"Телепрограмма"}></UserWidget>
          </UserWidgetsColumn>
          <UserWidgetsColumn>
            <UserWidget name={"Эфир"}></UserWidget>
          </UserWidgetsColumn>
        </UserWidgets>
      </StartPageFooter>
    </>
  );
}

export default App;
