import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const HelpScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.ScrollView}
        contentContainerStyle={styles.ScrollViewContentContainer}
      >
        <Text style={styles.head}>ثبت نام</Text>
        <Text style={styles.normalText}>
          برای ایجاد کاربری در این اپلیکیشن، ابتدا گزینه sign up رو انتخاب کنید.
        </Text>
        <Text style={styles.dotedText}>
          • ایمیل معتبر و در دسترس خود را وارد کنید.
        </Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/1.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • گزینه موافقت با قوانین ایکس برات را علامت بزنید و گزینه submit رو
          کلیک کنید.
        </Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/2.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • کد ارسالی به ایمیل خود را وارد کرده و گزینه submit را بزنید. (قسمت
          اسپم ایمیل خود را چک کنید)
        </Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/3.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • پسورد انتخابی خود را دوبار وارد کرده و گزینه submit را بزنید.
        </Text>
        <Text style={styles.head}>ورود به حساب کاربری</Text>
        <Text style={styles.normalText}>
          برای وارد شدن به حساب کاربری خود ابتدا گزینه log in رو انتخاب کنید.
        </Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/4.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • بعد از وارد کردن ایمیل و پسورد گزینه submit رو بزنید.
        </Text>
        <View style={styles.imgView}>
          <Image
            resizeMode="contain"
            style={styles.img2}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/5.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • پس از ورود به حساب کاربری، جداول نرخ ها را مشاهده می کنید.
        </Text>
        <Text style={styles.head}>تکمیل پروفایل</Text>
        <Text style={styles.normalText}>
          در این مرحله باید پروفایل خود را تکمیل کنید.
        </Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/6.png")}
          />
        </View>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/7.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • در این مرحله باید اطلاعات هویتی پروفایل خود را تکمیل کنید.
        </Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/8.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • موقعیت مکانی خود را جهت احراز هویت مشخص کنید.
        </Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/9.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • سپس عکس مدرک هویتی خود را بارگزاری نمایید.
        </Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/10.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • در این مرحله با توجه به موقعیت مکانی گزینه متفاوتی را مشاهده خواهید
          کرد.
        </Text>
        <Text style={styles.normalText}>
          اگر ایران را انتخاب کنید، بایستی شماره کارت و شماره شبا را وارد کنید.
        </Text>
        <Text style={styles.normalText}>
          در صورت انتخاب کشور افغانستان، دفاتر فعال در این کشور را نمایش می دهد.
        </Text>
        <Text style={styles.head}>
          ثبت درخواست معامله- مرحله اول ( واریز وجه)
        </Text>
        <Text style={styles.normalText}>
          برای ثبت درخواست معامله لازم است گزینه Deposit را انتخاب کنید.
        </Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/11.png")}
          />
        </View>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/12.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • ارز مورد نظر، مقدار و موقعیت مکانی خود را مشخص کنید و گزینه submit
          رو بزنید.
        </Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/13.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • بعد از ثبت درخواست، می توانید وضعیت درخواست خود را مشاهده نمایید.
        </Text>
        <Text style={styles.normalText}>
          دکمه Deposit در این مرحله به رنگ طوسی است، بدین معنا که درخواست شما
          توسط ادمین تایید شده است. روی سه نقطه کلیک کنید، تا جزئیات بیشتری از
          درخواست خودتان را مشاهده کنید.
        </Text>
        <View style={styles.imgView}>
          <Image
            resizeMode="contain"
            style={styles.img2}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/14.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • مراحل درخواست قابل مشاهده می باشد. در این قسمت درخواست ها قابل حذف و
          یا ویرایش است.
        </Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/15.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • دکمه Deposit در این مرحله به رنگ آبی است، بدین معنا که سیستم منتظر
          پرداخت وجه توسط مشتری است.
        </Text>
        <Text style={styles.normalText}>
          با کلیک روی سه نقطه می توانید مشاهده کنید که یک مرحله درخواست شما پیش
          رفته است. در این مرحله باید فیش واریز توسط مشتری بارگزاری گردد و
          موقعیت مکانی موردنظر انتخاب شود.
        </Text>
        <View style={styles.imgView}>
          <Image
            resizeMode="contain"
            style={styles.img2}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/16.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • هنگامی که فیش آپلود شده را مشاهده کردید، گزینه submit رو بزنید.
        </Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/17.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • در این مرحله پس از رویت فیش واریزی توسط ادمین، درخواست تایید می شود.
        </Text>
        <View style={styles.imgView}>
          <Image
            resizeMode="contain"
            style={styles.img2}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/18.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • دکمه Deposit در این مرحله به رنگ سبز است، بدین معنا که سیستم درخواست
          مشتری را تایید کرده است.
        </Text>
        <Text style={styles.normalText}>
          اکنون در کیف پول مقدار وجه خودتان را می توانید ببینید.
        </Text>
        <Text style={styles.normalText}>
          دو گزینه Transfer و Withdrawal فعال می شوند.
        </Text>
        <Text style={styles.head}>
          ثبت درخواست معامله – مرحله دوم(ارسال پول)
        </Text>
        <Text style={styles.normalText}>
          پس از مراحل ذکر شده، یک بار از اپلیکیشن خارج شده و مجددا وارد شوید.
        </Text>
        <View style={styles.imgView}>
          <Image
            resizeMode="contain"
            style={styles.img2}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/19-1.png")}
          />
        </View>
        <View style={styles.imgView}>
          <Image
            resizeMode="contain"
            style={styles.img2}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/19-2.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • پس از مشاهده نرخ¬های پیشنهادی دیگر مشتریان، در جدول Exchange، نرخ
          موردنظر انتخاب و مقدار پولی که قصد انتقال آن را دارید، به همراه نرخ
          پیشنهادی خود وارد نمایید و گزینه Exchange را بزنید.
        </Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/20.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • سیستم در این مرحله از شما می خواهد مقدار و نرخ پیشنهادی خود را تایید
          کنید.
        </Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/21.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • پس از تایید درخواست، شما به صفحه درخواست ها هدایت می شوید. در این
          صفحه مراحل انجام درخواست تان را مشاهده می کنید.
        </Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/22.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • در این قسمت درخواست قابل حذف و یا ویرایش است.
        </Text>
        <View style={styles.imgView}>
          <Image
            resizeMode="contain"
            style={styles.img2}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/23.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • پس از تایید توسط ادمین، کیف پول به همان میزان شارژ می شود.
        </Text>
        <Text style={styles.normalText}>
          گزینه Withdrawal را بزنید، به صفحه مربوطه هدایت می شوید.
        </Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/24.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • در این صفحه مقدار وجهی که قصد دارید از سیستم برداشت کنید را وارد
          نمایید، سایر گزینه ها نیز تکمیل شود.
        </Text>
        <View style={styles.imgView}>
          <Image
            resizeMode="contain"
            style={styles.img2}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/25.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • در کیف پول خود درخواست Withdrawal قابل مشاهده می باشد. همچون درخواست
          Deposit نیاز به طی مراحلی است.
        </Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/28.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • در این مرحله، منتظر پرداخت طرف دیگر معامله خواهید بود.
        </Text>
        <View style={styles.imgView}>
          <Image
            resizeMode="contain"
            style={styles.img2}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/29.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • پس از واریز، دکمه Withdrawal در این مرحله سبز رنگ می شود و فیش
          پرداختی نیز توسط شما قابل مشاهده است.
        </Text>
        <Text style={styles.head}>تغییر رمز عبور</Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/30.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • گزینه change password را کلیک کنید.
        </Text>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require("../../assets/App/MainScreen/MoreScreen/HelpScreen/31.png")}
          />
        </View>
        <Text style={styles.dotedText}>
          • رمز قبلی را وارد کرده، سپس دو بار رمز دلخواه جدید را وارد نمایید و
          گزینه submit رو بزنید.
        </Text>
      </ScrollView>
    </View>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  ScrollView: {
    flex: 1,
  },
  ScrollViewContentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    alignItems: "flex-end",
  },
  head: {
    fontSize: 28,
    fontWeight: "500",
    marginVertical: 15,
    textAlign: "right",
  },
  normalText: {
    fontSize: 16,
    textAlign: "right",
  },
  dotedText: {
    fontSize: 16,
    textAlign: "right",
    marginVertical: 8,
    marginRight: 10,
  },
  imgView: {
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
  },
  img: {
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: "#aaa",
  },
  img2: {
    borderRadius: 15,
    width: "100%",
    marginVertical: -115,
  },
});
