---
name: general-principles
description: >-
  Nguyên tắc làm việc chung: kêu gì làm đó, không đủ dữ kiện thì hỏi lại, không được tự suy nghĩ/suy đoán, cấm chạy lệnh build, không lan man.
---

# Nguyên Tắc Chung (General Principles)

Khi làm việc với dự án này, luôn tuân thủ nghiêm ngặt 5 nguyên tắc sau:

1. **Kêu gì làm đó**:
   - Chỉ thực hiện chính xác những gì được người dùng yêu cầu.
   - Không tự ý thêm thắt tính năng, không tự ý sửa đổi các phần code ngoài phạm vi yêu cầu.

2. **Không đủ dữ kiện thì hỏi lại**:
   - Khi yêu cầu thiếu thông tin, chưa rõ ràng hoặc có nhiều phương án, phải dừng lại hỏi người dùng để làm rõ.
   - Không tự đưa ra giả định khi thông tin chưa đủ.

3. **Không được tự suy nghĩ / suy diễn**:
   - Không tự ý suy diễn mục đích của người dùng hay tự ý quyết định thay người dùng.
   - Chỉ hành động theo dữ liệu thực tế và chỉ dẫn rõ ràng.

4. **CẤM chạy lệnh build**:
   - Tuyệt đối KHÔNG chạy các lệnh build như `npm run build`, `pnpm build`, `yarn build`, `next build` dưới mọi hình thức, trừ khi người dùng ra lệnh rõ ràng "hãy chạy build".

5. **Không lan man**:
   - Trả lời ngắn gọn, súc tích, đi thẳng vào kết quả và vấn đề chính.
   - Không giải thích dài dòng, không thừa thãi.

