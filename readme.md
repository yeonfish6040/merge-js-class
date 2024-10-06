# Merge JS Class

Merge JS Class는 js 환경에서 같은 클래스를 쉽게 합치기 위한 라이브러리입니다.

## 프로젝트 정보

-  **이름**: merge-js-class
-  **저자**: Yeonjun Lee <yeonfish6040@gmail.com>
-  **라이센스**: ISC
-  **홈페이지**: [GitHub Repository](https://github.com/yeonfish6040/merge-js-class#readme)
-  **버그 리포트**: [Issues Page](https://github.com/yeonfish6040/merge-js-class/issues)

## 설치방법
**패키지 설치**
   ```bash
   npm install merge-js-class
   ```

## 사용 방법
**merge 예제**
   ```typescript
   import merge from "merge-js-class";

   async function createUser(data: CreateUserDTO) {
      const user = new User();
      await merge(user, data);
   
      await this.userRepository.save(user);
   }
   ```

## 기여하기

버그 리포트나 기능 제안은 [이슈 페이지](https://github.com/yeonfish6040/merge-js-class/issues)에서 제안해 주세요. 모든 기여는 환영합니다!

## 라이센스

이 프로젝트는 ISC 라이센스 하에 배포됩니다.

---

문의 사항이나 추가 정보가 필요하시면, 프로젝트의 [GitHub 페이지](https://github.com/yeonfish6040/merge-js-class)를 방문해 주세요.
