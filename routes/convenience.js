const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const convenienceService = require('../service/convenienceService');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
      name: req.body.name,
    };
    logger.info(`(convenience.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.name) {
      const err = new Error('Not allowed null (name)');
      logger.error(err.toString());

      return res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await convenienceService.reg(params);
    logger.info(`(convenience.reg.result) ${JSON.stringify(result)}`);

    // 최종 응답
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ err: err.toString() });
  }
});

// 편의점 리스트 조회
router.get('/', async (req, res) => {
  try {
    // const params = {
    //   name: req.query.name,
    // };
    // logger.info(`(convenience.list.params) ${JSON.stringify(params)}`);

    const result = await convenienceService.list(req.params);
    logger.info(`(convenience.list.result) ${JSON.stringify(result)}`);

    // 최종 응답
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ err: err.toString() });
  }
});

// 수정
router.put('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
      name: req.body.name,
    };
    logger.info(`(convenience.update.params) ${JSON.stringify(params)}`);

    const result = await convenienceService.edit(params);
    logger.info(`(convenience.update.result) ${JSON.stringify(result)}`);

    // 최종 응답
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ err: err.toString() });
  }
});
// 삭제
router.delete('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
    };
    logger.info(`(convenience.delete.params) ${JSON.stringify(params)}`);

    const result = await convenienceService.delete(params);
    logger.info(`(convenience.delete.result) ${JSON.stringify(result)}`);

    // 최종 응답
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
