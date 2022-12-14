import React, { useEffect, useState } from "react";
import {
  Document,
  Page,
  View,
  Text,
  Link,
  Font,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  header: {
    heigth: "5%",
    backgroundColor: "#4BC9D4",
  },

  title: {
    margin: 10,
    fontSize: 25,
    textAlign: "center",
    // backgroundColor: "#e4e4e4",
    textTransform: "uppercase",
    fontFamily: "Oswald",
  },

  body: {
    flexGrow: 1,
  },
  row: {
    flexGrow: 1,
    flexDirection: "row",
  },
  column: {
    flexGrow: 1,
    flexDirection: "column",
  },
  block: {
    flexGrow: 1,
  },
  text: {
    // width: "80%",
    margin: 15,
    paddingLeft: 30,
    fontFamily: "Oswald",
    textAlign: "justify",
  },
  textNumber: {
    // width: "80%",
    margin: 15,
    paddingRight: 20,
    fontFamily: "Oswald",
    textAlign: "right",
  },

  fill1: {
    width: "20%",
    backgroundColor: "#4BC9D4",
  },

  fill3: {
    flexGrow: 2,
    backgroundColor: "#e78632",
  },
  fill4: {
    flexGrow: 2,
    backgroundColor: "#e29e37",
  },
});

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

// Create Document Component
export default function MyDocument(props: any) {
  const [payrolls, setPayrolls] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "Get",
    };
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/payroll/findConfirm/${props.year}/${props.month}`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPayrolls(data);
      });
  }, []);

  return (
    <Document>
      {payrolls.map((payroll: any) => (
        <Page size="A4">
          <View style={styles.body}>
            <View style={styles.column}>
              <View style={{ backgroundColor: "#4BC9D4" }}>
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    margin: 30,
                    textTransform: "uppercase",
                    fontFamily: "Oswald",
                    fontSize: 40,
                  }}
                >
                  The Company
                </Text>
              </View>

              {/* title */}
              <Text
                style={{
                  color: "#24D1AE",
                  textAlign: "center",
                  margin: 30,
                  textTransform: "uppercase",
                  fontFamily: "Oswald",
                  fontSize: 25,
                }}
              >
                Payslip {payroll.year}-{payroll.month}
              </Text>
              {/* personal info */}
              <View style={{ backgroundColor: "#24D1AE" }}>
                <Text
                  style={{
                    color: "black",
                    textAlign: "left",
                    margin: 5,
                    marginLeft: 20,
                    textTransform: "uppercase",
                    fontFamily: "Oswald",
                    fontSize: 15,
                    width: 100,
                  }}
                >
                  Personal Info
                </Text>
              </View>
              <Text style={styles.text}>Employee ID: {payroll.employeeid}</Text>
              <Text style={styles.text}>Name: {payroll.name}</Text>

              {/* Payment */}
              <View style={{ backgroundColor: "#24D1AE" }}>
                <Text
                  style={{
                    color: "black",
                    textAlign: "left",
                    margin: 5,
                    marginLeft: 20,
                    textTransform: "uppercase",
                    fontFamily: "Oswald",
                    fontSize: 15,
                    width: 100,
                  }}
                >
                  Payment
                </Text>
              </View>

              <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ flexGrow: 1 }}>
                  <Text style={styles.text}>Salary:</Text>
                </View>
                <View style={{ display: "flex" }}>
                  <Text style={styles.textNumber}>{payroll.basic_salary}</Text>
                </View>
              </View>

              <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ flexGrow: 1 }}>
                  <Text style={styles.text}>OT Pay:</Text>
                </View>
                <View style={{ display: "flex" }}>
                  <Text style={styles.textNumber}>{payroll.ot_pay}</Text>
                </View>
              </View>

              <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ flexGrow: 1 }}>
                  <Text style={styles.text}>Bonus:</Text>
                </View>
                <View style={{ display: "flex" }}>
                  <Text style={styles.textNumber}>{payroll.bonus}</Text>
                </View>
              </View>

              <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ flexGrow: 1 }}>
                  <Text style={styles.text}>Deduction:</Text>
                </View>
                <View style={{ display: "flex" }}>
                  <Text style={styles.textNumber}>{payroll.nopay_leave}</Text>
                </View>
              </View>

              <View style={{ backgroundColor: "#24D1AE" }}>
                <Text
                  style={{
                    color: "black",
                    textAlign: "left",
                    margin: 5,
                    marginLeft: 20,
                    textTransform: "uppercase",
                    fontFamily: "Oswald",
                    fontSize: 15,
                    width: 100,
                  }}
                >
                  MPF
                </Text>
              </View>

              <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ flexGrow: 1 }}>
                  <Text style={styles.text}>MPF:</Text>
                </View>
                <View>
                  <Text style={styles.textNumber}>{payroll.mpf_employee}</Text>
                </View>
              </View>

              <View style={{ backgroundColor: "#24D1AE" }}>
                <Text
                  style={{
                    color: "black",
                    textAlign: "left",
                    margin: 5,
                    marginLeft: 20,
                    textTransform: "uppercase",
                    fontFamily: "Oswald",
                    fontSize: 15,
                    width: 100,
                  }}
                >
                  Net Pay
                </Text>
              </View>

              <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ flexGrow: 1 }}>
                  <Text style={styles.text}>Total:</Text>
                </View>
                <View>
                  <Text style={styles.textNumber}>{payroll.total}</Text>
                </View>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <View style={{ backgroundColor: "#4BC9D4" }}>
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      margin: 10,
                      // textTransform: "uppercase",
                      fontFamily: "Oswald",
                      fontSize: 10,
                    }}
                  >
                    Powered by Easy HR Solutions
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Page>
      ))}
    </Document>
  );
}
